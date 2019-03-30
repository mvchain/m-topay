import {login, refreshToken, validateCode, getOrderExist, order, orderStatus, idOrderInfo, shopPayment} from '@/api/login'
import {getToken, setToken, removeToken} from '@/utils/auth'

const user = {
    state: {
        payment: [],
        shopPayInfo: {},
        token: '',
        refreshToken: '',
        orderInfo: {
            amount: 0,
            buyUsername: '',
            limitTime: 0,
            orderNumber: '',
            payAccount: '',
            payType: 0,
            price: 0,
            remitShopId: 0,
            remitUserId: 0,
            sellUsername: '',
            shopId: 0,
            sign: '',
            tokenId: '',
            tokenName: '',
            tokenValue: 0
        },
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
            state.userInfo = token
        },
        SET_PAYMENT: (state, token) => {
            state.payment = token
        },
        SET_SHOP_PAY_INFO: (state, token) => {
            state.shopPayInfo = token
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
                    let usr = Object.assign({}, state.userInfo);
                    setToken(res.data)
                    usr.token =res.data;
                    window.mvc.setToken(JSON.stringify(res))
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
                getOrderExist(payload).then(res => {
                    if (res.data) {
                        commit('SET_ORDER_INFO', res.data)
                    }
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
        postOrderStatus({commit, state}, payload) {
            return new Promise((resolve, reject) => {
                orderStatus(payload).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getOrderInfo({commit, state}, payload) {
            return new Promise((resolve, reject) => {
                idOrderInfo(payload).then(res => {
                    commit('SET_ORDER_INFO', res.data)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getShopPayment({commit, state}, payload) {
            return new Promise((resolve, reject) => {
                shopPayment(payload).then(res => {
                    commit('SET_PAYMENT', res.data)
                    resolve(res.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}

export default user
