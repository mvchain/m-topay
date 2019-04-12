<template>
    <div class="confirm container">
        <div class="container-main" >

            <div class="confirm-top">
                <div class="confirm-top" style="padding:0;">
                    <p class="confirm-top-title" style="margin-bottom:0.2rem;">选择币种</p>
                    <div class="token-con-div">
                        <span class="token-con" v-for="(v, k) in tokenList" :class="k === tokenList.length-1 && 'token-opc'">
                            <svg-icon class="token-icon" :icon-class="paymentType.id === v.id ? v.icon : v.unicon"></svg-icon>
                            <b class="token-text" :class="paymentType.id === v.id ? '' : 'token-grc'">{{v.name}}</b>
                        </span>
                    </div>
                </div>
                <p class="confirm-top-title">充值金额</p>
                <p class="confirm-top-balance">{{Math.floor(orderInfo.amount * 100) / 100 }} CNY</p>
                <p class="confirm-top-bottom">≈ {{Math.floor(orderInfo.tokenValue * 10000) / 10000}} {{paymentType.name}}</p>
            </div>
            <div class="confirm-middle">下单后，如退出购买页面，下次点击充值会继续进行本次未结束充值订单</div>
        </div>
        <div>
        </div>
        <div>
            <div class="container-btn" @click="createOrder">确认下单</div>
        </div>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'confirm',
        data() {
            return {
                paymentType: {
                    id: 1,
                    name: 'USDT'
                },
                tokenList: [
                    {
                        id: 1,
                        name: 'USDT',
                        icon: 'usdt',
                        unicon: 'usdt_1'
                    },
                    {
                        id: 2,
                        name: 'ETH',
                        icon: 'eth',
                        unicon: 'eth_1'
                    },
                    {
                        id: 3,
                        name: 'BTC',
                        icon: 'btc',
                        unicon: 'btc_1'
                    },
                    {
                        id: 3,
                        name: 'BTC',
                        icon: 'btc',
                        unicon: 'btc_1'
                    }
                ]
            }
        },
        computed: {
            ...mapGetters({
                orderInfo: 'orderInfo',
            })
        },
        methods: {
            createOrder() {
                this.$store.dispatch('postOrder', this.orderInfo).then((res) => {
                    this.$store.dispatch('getOrderInfo', res.data).then(() => {
                        this.$router.push('order')
                    }).catch()
                }).catch((err) => {
                })
            }
        }
    }
</script>

<style lang="scss">
    @import '../views/variable';
    .confirm{
        .confirm-top{
            background:#FFF;
            border-radius:0.2933rem;
            margin:0.32rem 0;
            padding-left:0.5rem;
            .token-con-div{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                .token-con{
                    text-align: center;
                    display: flex;
                    margin-top:0.5rem;
                    justify-content: center;
                    align-items: center;
                    height:1.06667rem;
                    width:2.9333rem;
                    border:1px solid #648BE6;
                    border-radius: 0.5rem;
                }
                .token-icon{
                    width:0.75rem;
                }
                .token-opc{
                    opacity: 0;
                }
                .token-text{
                    font-size:0.4666rem;
                    padding-left:0.3rem;
                }
                .token-grc{
                    color:rgb(193, 193, 193);
                }
            }

            & p{
                height:1.1111rem;
            }
            & .confirm-top-title{
                color:$normalFT-color;
                font-size:0.4rem;
                line-height: 1.8rem;
            }
            & .confirm-top-balance{
                font-size:0.64rem;
                color:$importFT-color;
                line-height: 1.5rem;
            }
            & .confirm-top-bottom{
                color:$normalFT-color;
                font-size:0.34667rem;
                line-height: 0.7rem;
            }
        }
        .confirm-middle{
            color:$normalFT-color;
            font-size:0.34667rem;
            padding: 0 0.5rem;
            line-height: 0.5rem;
        }
    }
</style>
