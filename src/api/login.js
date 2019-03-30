import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
export function refreshToken(data) {
  return request({
    url: '/user/refresh',
    method: 'post'
  })
}
export function validateCode(data) {
    return request({
        url: '/user/sms?cellphone=' + data,
        method: 'get'
    })
}
export function getOrderExist() {
    return request({
        url: '/order/exist',
        method: 'get'
    })
}
export function order(data) {
    return request({
        url: '/order',
        method: 'post',
        data
    })
}
export function orderStatus(data) {
    return request({
        url: `/order/${data.id}/status?payAccount=${data.payAccount}&status=${data.status}&payType=${data.payType}`,
        method: 'post',
    })
}
export function idOrderInfo(data) {
    return request({
        url: '/order/' + data,
        method: 'get'
    })
}
export function shopPayment(data) {
    return request({
        url: `/shop/shop/${data}/payment`,
        method: 'get'
    })
}
export function payFor(opt) {
    return request({
        url: `/order/${opt.id}/status?payAccount=1&status=1`,
        method: 'get'
    })
}
