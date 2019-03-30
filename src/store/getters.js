const getters = {
    token: state => state.login.token,
    refreshToken: state => state.login.refreshToken,
    orderInfo: state => state.login.orderInfo,
    userInfo: state => state.login.userInfo,
    payment: state => state.login.payment,
    shopPayInfo: state => state.login.shopPayInfo,
}
export default getters
