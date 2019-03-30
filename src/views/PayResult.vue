<template>
    <div class="pay-result container">
        <div class="container-main">
            <div class="result-title" v-if="orderInfo.orderStatus === 2">
                <div class="flex-left">
                    <p style="font-weight: 900;font-size:0.5rem;">订单完成充值</p>
                </div>

            </div>
            <div class="result-title" v-else>
                <div class="flex-left">
                    <p>购买{{orderInfo.tokenName}}</p>
                </div>
                <div class="flex-right">
                    <p>{{orderInfo.orderStatus | orderStatusFliter}}</p>
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
                    <p v-if="orderInfo.orderStatus === 2">完成付款时间</p>
                </div>
                <div class="flex-right">
                    <p>{{orderInfo.tokenValue}}{{orderInfo.tokenName}}</p>
                    <p>{{orderInfo.orderNumber}}</p>
                    <p>{{orderInfo.sellUsername}}</p>
                    <p>{{orderInfo.price}}</p>
                    <p>{{orderInfo.amount}}</p>
                    <p>{{new Date(orderInfo.createdAt).toLocaleString()}}</p>
                    <p v-if="orderInfo.orderStatus === 2">{{new Date(orderInfo.payAt).toLocaleString()}}</p>
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
                timer: null
            }
        },
        computed: {
            ...mapGetters({
                orderInfo: 'orderInfo',
            })
        },
        mounted() {
            this.$store.dispatch('getOrderInfo', this.orderInfo.id)
            this.timer = setInterval(() => {
                if(this.orderInfo.orderStatus === 2) {
                    clearInterval(this.timer)
                }
                this.$store.dispatch('getOrderInfo', this.orderInfo.id)
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
                flex: 1;
            }
            & > div.flex-right{
                flex: 2;
                text-align: right;
            }
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
    }
</style>
