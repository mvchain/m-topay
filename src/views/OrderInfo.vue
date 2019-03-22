<template>
    <div>
        <div>订单信息</div>
        <router-link to="/alipay">支付宝下单</router-link>
        <router-link to="/wxPay">微信下单</router-link>
        <router-link to="/bank">银行卡下单</router-link>
    </div>
</template>

<script>
    export default {
        name: 'order-info'
    }
</script>

<style lang="scss">

</style>
