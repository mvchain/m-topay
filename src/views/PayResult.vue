<template>
    <div class="pay-result container">
        <div class="container-main">
            <div class="result-title" v-if="orderInfo.orderStatus === 2">
                <div class="flex-left">
                    <p class="result-title-right1" style="font-weight: 900;font-size:0.5rem;">订单完成充值</p>
                </div>

            </div>
            <div class="result-title" v-else>
                <div class="flex-left">
                    <p>购买USDT</p>
                </div>
                <div class="flex-right">
                    <p class="result-title-right">{{orderInfo.orderStatus | orderStatusFliter}}</p>
                </div>
            </div>
            <div class="result-middle">
                <div class="flex-left">
                    <p>订单金额</p>
                    <p>订单号</p>
                    <p>卖家</p>
                    <p>单价</p>
                    <p>数量</p>
                    <p>下单时间</p>
                    <p v-if="orderInfo.orderStatus === 1 || orderInfo.orderStatus === 2">完成付款时间</p>
                    <p v-if="orderInfo.orderStatus === 2">交易完成时间</p>
                </div>
                <div class="flex-right">
                    <p class="result-title-right">{{Math.floor(orderInfo.amount * 100) / 100}} CNY</p>
                    <p>{{orderInfo.orderNumber}}</p>
                    <p>{{orderInfo.sellUsername}}</p>
                    <p>{{Math.floor(orderInfo.price * 100) / 100}} CNY</p>
                    <p>{{Math.floor(orderInfo.tokenValue * 10000) / 10000}}{{orderInfo.tokenName}}</p>
                    <p>{{orderInfo.createdAt | timeFormat}}</p>
                    <p v-if="orderInfo.orderStatus === 1 || orderInfo.orderStatus === 2">{{orderInfo.payAt | timeFormat}}</p>
                    <p v-if="orderInfo.orderStatus === 2">{{orderInfo.stopAt | timeFormat}}</p>
                </div>
            </div>
        </div>
        <div >
            <div class="container-btn result-btn" v-if="orderInfo.orderStatus === 1">
                <span @click="problemHandler">遇到问题?</span>
                <span>等待对方确定收款</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'pay-result',
        data() {
            return {
                timer: null,
                isOver: false,
            }
        },
        watch: {
            isOver(n) {
                if(n) {
                    this.$confirm({
                        message: '订单完成充值',
                        confirmBtn: '确定',
                    })
                    clearInterval(this.timer)
                }
            }
        },
        computed: {
            ...mapGetters({
                orderInfo: 'orderInfo',
            })
        },
        mounted() {
            this.$store.dispatch('getOrderInfo', this.orderInfo.id).then(() => {
                if(this.orderInfo.orderStatus === 2) {
                    this.isOver = true
                }

            })
            this.timer = setInterval(() => {
                this.$store.dispatch('getOrderInfo', this.orderInfo.id).then(() => {
                    if(this.orderInfo.orderStatus === 2) {
                        this.isOver = true
                    }
                })
            }, 5000)
        },
        methods: {
            problemHandler() {
                this.$confirm({
                    message: '请通过邮箱与我们联系，Email:1234@gmail.com',
                    confirmBtn: '我明白了',
                })
            }
        }
    }
</script>

<style lang="scss">
    @import '../views/variable';
    .pay-result{

        .result-title,
        .result-middle{
            background:#fff;
            border-radius: 0.21333rem;
            margin: 0.32rem 0;
            display: flex;
            font-size:0.346667rem;
            color:$normalFT-color;
            padding:0.4rem;
            line-height: 0.9rem;
            & > div.flex-left{
                flex: 3;
            }
            & > div.flex-right{
                flex: 5;
                text-align: right;
            }
        }
        & .result-title-right{
            font-size:0.45rem;
            color:$importFT-color;
            font-weight: 900;
        }
        .result-title{
            line-height: 0.5rem;

        }
        .result-middle{}
        .result-btn{
            display: flex;
            & > span:first-child{
                flex: 1;
                background:#fff;
                color:$normalFT-color;
            }
            & > span:last-child{
                background:#C5C5C5;
                flex:2;
            }
        }
        .result-title-right{
            font-size:0.45rem;
            color:$importFT-color;
            font-weight: 900;
        }
    }
</style>
