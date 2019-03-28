const getters = {
    token: state => state.login.token,
    refreshToken: state => state.login.refreshToken,
    orderInfo: state => state.login.orderInfo,
    userInfo: state => state.login.userInfo,
}
export default getters
