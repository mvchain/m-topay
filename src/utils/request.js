import axios from 'axios'
import store from '../store/index'
import {getToken} from '@/utils/auth'
// 创建axios实例
axios.defaults.withCredentials = true
const service = axios.create({
    baseURL: window.urlData.url, // api的base_url
    timeout: 15000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
    if (getToken()) {
        config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
}, error => {
    // Do something with request error
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */

        const res = response.data
        if (res.code !== 200) {
            return Promise.reject(res.message)
        } else {
            return response.data
        }
    },
    error => {
        if (error.response.data.code === 403) {
            store.dispatch('getReferToken').then(() => {
                window.location.reload()
            }).catch()
        } else if (error.response.data.code === 401) {
            store.dispatch('FedLogOut').then(() => {
                alert('账号过期，请重新登录')
                window.location.hash = "/";
            })
        }
        return Promise.reject(error.response.data.message)
    }
)

export default service
