import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
            meta: { title: '快捷登录/注册' }
        },
        {
            path: '/confirm',
            name: 'confirm',
            meta: { title: '购买数字货币' },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Confirm.vue')
        },
        {
            path: '/order',
            name: 'order',
            meta: { title: '订单信息' },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/OrderInfo.vue')
        },
        {
            path: '/alipay',
            name: 'alipay',
            meta: { title: '支付宝付款信息', back: true },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/AliPay.vue')
        },
        {
            path: '/wxPay',
            name: 'wxPay',
            meta: { title: '微信付款信息', back: true },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/WxPay.vue')
        },
        {
            path: '/bank',
            name: 'bank',
            meta: { title: '银行卡付款信息', back: true },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/BankCard.vue')
        }
    ]
})
