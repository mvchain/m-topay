import {login, refreshToken, validateCode, orderExist, order} from '@/api/login'
import {getToken, setToken, removeToken} from '@/utils/auth'

const user = {
    state: {
        token: '',
        refreshToken: '',
        orderInfo: {},
        userInfo: {}
    },

    mutations: {
        SET_REFRESH_TOKEN: (state, token) => {
            state.refreshToken = token
        },
        SET_ORDER_INFO: (state, token) => {
            state.orderInfo = token
        },
        SET_USER_INFO: (state, token) => {
            state.orderInfo = token
        },
    },
    actions: {
        Login({commit, state}, payload) {
            return new Promise((resolve, reject) => {
                login(payload).then(res => {
                    commit('SET_REFRESH_TOKEN', res.data.refreshToken)
                    commit('SET_USER_INFO', res.data)
                    setToken(res.data.token)
                    resolve(res.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                removeToken()
                resolve()
            })
        },
        getReferToken: ({commit, state}, payload) => {
            const rToken = state.refreshToken;
            setToken(rToken)
            return new Promise((resolve, reject) => {
                refreshToken().then(res => {
                    setToken(res.data)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getValidate({commit, state}, payload) {
            return new Promise((resolve, reject) => {
                validateCode(payload).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        orderExist({commit, state}, payload) {
            return new Promise((resolve, reject) => {
                orderExist(payload).then(res => {
                    commit('SET_ORDER_INFO', res.data)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        postOrder({commit, state}, payload) {
            return new Promise((resolve, reject) => {
                order(payload).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}

export default user
