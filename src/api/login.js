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
export function orderExist() {
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
