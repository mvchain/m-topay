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
                <div>
                    <p>支付宝</p>
                    <p>微信</p>
                    <p>银行卡</p>
                </div>
                <div>
                    <p class="order-top-right">O</p>
                    <p class="order-top-right">O</p>
                    <p class="order-top-right">O</p>
                </div>
            </div>
        </div>
        <div>
            <div class="container-btn">
                <span @click="cancelOrder">取消订单</span>
                <span @click="$router.push('alipay')">去支付</span>
            </div>
        </div>
    </div>
</template>

<script>
    import confirmMixin from '../components/Dialog';
    import { mapGetters } from 'vuex';
    import countDown from '../components/countDown'
    export default {
        name: 'order-info',
        mixins: [ confirmMixin ],
        components: {
            'count-down': countDown
        },
        computed: {
            ...mapGetters({
                orderInfo: 'orderInfo',
            })
        },
        methods: {
            cancelOrder() {
                this.$confirm({
                    message: 'lalalal',
                    cancelBtn: '取消',
                    confirmBtn: '确定',
                    onSuccess: this.successHandler,
                    cancelHandler: this.cancelHandler
                })
            },
            successHandler() {
               console.log('确定')
            },
            cancelHandler() {
                console.log('取消')
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
