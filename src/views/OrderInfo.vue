<template>
    <div class="order container">
        <div class="container-main">
            <div class="order-top">
                <div>
                    <p>购买USDT</p>
                    <p>剩余收款时间</p>
                </div>
                <div>
                    <p class="order-top-pay order-top-right">{{orderInfo.orderStatus | orderStatusFliter}}</p>
                    <p class="order-top-time order-top-right">
                        <count-down :endTime="orderInfo.limitTime"></count-down>
                    </p>
                </div>
            </div>

            <div class="order-middle">
                <div>
                    <P>订单金额</P>
                    <P>卖家</P>
                    <P>单价</P>
                    <P>数量</P>
                    <P>订单号</P>
                    <P>下单时间</P>
                </div>
                <div>
                    <p class="order-top-right order-top-balance">{{orderInfo.amount}} CNY</p>
                    <p class="order-top-right">{{orderInfo.sellUsername}}</p>
                    <p class="order-top-right">{{orderInfo.price}} CNY</p>
                    <p class="order-top-right">{{orderInfo.tokenValue}} {{orderInfo.tokenName}}</p>
                    <p class="order-top-right">{{orderInfo.orderNumber}}</p>
                    <p class="order-top-right">{{new Date().toLocaleString()}}</p>
                </div>
            </div>
            <div class="order-title">选择支付方式</div>
            <div class="order-bottom">
                <div v-for="(v, k) in payment" :key="k" class="payment-con">
                    <div class="payment-con-item">
                        <svg-icon :class="v.paymentType === 1 ? 'icon-cardpay' : v.paymentType === 3 ?  'icon-wechatpay' : 'icon-alipay'"
                                  :icon-class="v.paymentType === 1 ? 'cardpay' : v.paymentType === 3 ?  'wechatpay' : 'alipay'"></svg-icon>
                        <span>{{v.paymentType === 1 ? '银行卡' : v.paymentType === 3 ? '微信' : '支付宝'}}</span>
                    </div>
                    <div @click="changePayType(v.paymentType, k)" class="order-top-right payment-con-item">
                        <svg-icon class="icon-unselected"  :icon-class="paymentType === v.paymentType ? 'selected' : 'unselected'"></svg-icon>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="container-btn">
                <span @click="cancelOrder">取消订单</span>
                <span @click="goPayHandler">去支付</span>
            </div>
        </div>
    </div>
</template>

<script>
    import countDown from '../components/countDown';
    import { mapGetters } from 'vuex';

    export default {
        name: 'order-info',

        data() {
            return {
                paymentType: 0,
                shopPayInfo: {}
            }
        },
        watch: {
            $route(to, from) {
                this.$destroy('count-down')
            }
        },
        mounted() {
            this.getShopData(this.orderInfo.shopId)
            this.$store.dispatch('getOrderInfo', this.orderInfo.id)
        },
        components: {
            'count-down': countDown
        },
        computed: {
            ...mapGetters({
                orderInfo: 'orderInfo',
                payment: 'payment',
                timeText: 'timeText'
            })
        },
        methods: {
            getShopData(id) {
                this.$store.dispatch('getShopPayment', id)
            },
            cancelOrder() {
                this.$confirm({
                    message: '确定取消此订单?',
                    cancelBtn: '取消',
                    confirmBtn: '确定',
                    onSuccess: this.successHandler,
                })
            },
            successHandler() {
                this.$store.dispatch('postOrderStatus', {payAccount: this.orderInfo.payAccount, id: this.orderInfo.id, status: 4})
                    .then(() => {
                        this.$router.push('carry')
                    }).catch()
            },
            changePayType(v, k) {
                this.paymentType = v;
                this.shopPayInfo = this.payment[k]
            },
            goPayHandler() {
                if (this.orderInfo.orderStatus !== 0 ) return;
                if (this.paymentType === 0) {
                    this.$confirm({
                        message: '请选择支付方式',
                        confirmBtn: '确定',
                    })
                    return
                }
                this.$store.commit('SET_SHOP_PAY_INFO', this.shopPayInfo)
                this.$destroy('count-down')
                switch (this.paymentType) {
                    case 1:
                        this.$router.push('bank')
                        break;
                    case 2:
                        this.$router.push('alipay')
                        break;
                    default:
                        this.$router.push('wxPay')
                }

            }
        }
    }
</script>

<style lang="scss">
    @import '../views/variable';
    .order{
        .order-top,
        .order-middle,
        .order-bottom{
            background:#fff;
            border-radius: 0.21333rem;
            margin: 0.32rem 0;
            display: flex;
            font-size:0.346667rem;
            color:$normalFT-color;
            padding:0.4rem;
            line-height: 0.9rem;
            & > div{
                flex: 1;
            }
            & .order-top-right{
                text-align: right;

            }
        }
        .order-top{
            line-height: 0.9rem;
            & .order-top-pay{
                font-size:0.45333rem;
                color:$errorFT-color;
                font-weight: 900;
            }
            & .order-top-time{
                font-size:0.48rem;
                font-weight: 900;
                color: $importFT-color;
            }
        }
        .order-middle{
            line-height: 0.75rem;
            & .order-top-balance{
                font-size:0.426667rem;
            }
        }
        .order-bottom{
            line-height: 0.95rem;
            flex-direction: column;
            .payment-con{
                display: flex;
                & .payment-con-item{
                    flex:1;
                    display: flex;
                    align-items: center;
                }
                & .order-top-right{
                    justify-content: flex-end;
                    & .icon-unselected{
                        width:0.586667rem;
                        height:0.586667rem;
                    }
                }
            }

            & .icon-wechatpay,
            & .icon-alipay,
            & .icon-cardpay{
                width:0.6rem;
                height:0.6rem;
               margin-right:0.2rem;
            }
        }
        .order-title{
            font-size:0.346667rem;
            color:$normalFT-color;
            margin: 0.64rem 0 0.32rem 0;
        }
        .container-btn{
            display: flex;
            & span:first-child{
                background:#fff;
                color:$footBack-color;
            }
            & span{
                flex:1;
            }
        }
    }
</style>
