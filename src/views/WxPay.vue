<template>
    <div class="wxpay container">
        <div class="container-main">
            <div class="wxpay-pay">
                <div class="flex-left">
                    <p>待付款</p>
                    <p>剩余付款时间</p>
                </div>
                <div class="flex-right">
                    <p  class="wxpay-top-pay wxpay-top-right">{{Math.floor(orderInfo.amount * 100) / 100}} CNY <copy-btn :icode="String(orderInfo.amount)"></copy-btn></p>
                    <p class="wxpay-top-time wxpay-top-right">
                        <count-down :endTime="orderInfo.limitTime"></count-down>
                    </p>
                </div>
            </div>
            <div class="wxpay-title">请使用微信向该账户转账</div>
            <div class="wxpay-info">
                <div class="flex-left">
                    <p>收款人</p>
                    <p>微信账号</p>
                </div>
                <div class="flex-right">
                    <p class="wxpay-top-right">
                        {{shopPayInfo.accountName}} <copy-btn :icode="shopPayInfo.accountName"></copy-btn>
                    </p>
                    <p class="wxpay-top-right">{{shopPayInfo.paymentAccount}} <copy-btn :icode="shopPayInfo.paymentAccount"></copy-btn></p>
                </div>
            </div>
            <div class="wxpay-code">
                <div class="wxpay-code-img">
                    <img :src="shopPayInfo.paymentImage" alt="">
                </div>
                <div class="wxpay-code-text">微信收款二维码</div>
            </div>
            <div class="wxpay-account">
                <input type="text" placeholder="请输入付款账号" v-model="payAccount">
            </div>
            <div class="wxpay-prompt">请务必输入付款账号，以便进行下一步操作。</div>
        </div>
        <div>
            <div  class="container-btn pay-foot" >
                <span class="pay-foot-top" @click="$router.go(-1)">更换支付方式</span>
                <span @click="payHandler" class="pay-foot-bottom" :class="!payBtnFlag ? 'pay-btn' : ''">确认完成付款</span>
            </div>
        </div>
    </div>
</template>

<script>
    import copyBtn from '../components/CopyBtn';
    import countDown from '../components/countDown';
    import { mapGetters } from 'vuex';
    export default {
        name: 'wx-pay',
        data() {
            return {
                payBtnFlag: false,
                payAccount: ''
            }
        },
        watch: {
            $route(to, from) {
                this.$destroy('count-down')
            },
            payAccount(n, o) {
                if (n.trim()) {
                    this.payBtnFlag = true;
                } else {
                    this.payBtnFlag = false;
                }
            }
        },
        computed: {
            ...mapGetters({
                orderInfo: 'orderInfo',
                shopPayInfo: 'shopPayInfo',
            })
        },

        components: {
            copyBtn,
            'count-down': countDown
        },
        mounted() {
            this.$store.dispatch('getOrderInfo', this.orderInfo.id)
        },
        methods: {
            payHandler() {
                if (!this.payAccount.trim()) return;
                this.$store.dispatch('postOrderStatus', {payAccount: this.payAccount, id: this.orderInfo.id, status: 1})
                    .then(() => {
                        this.$router.push('result')
                    }).catch()
            }
        }
    }
</script>

<style lang="scss">
    @import '../views/variable';
    .wxpay{
        .wxpay-pay,
        .wxpay-info{
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
            }
            & .wxpay-top-right{
                text-align: right;
            }
        }
        .wxpay-pay{
            .wxpay-top-pay{
                font-size:0.45333rem;
                color:$importFT-color;
                font-weight: 900;
            }

            .wxpay-top-time{
                font-size:0.48rem;
                font-weight: 900;
                color: $importFT-color;
            }
        }
        .wxpay-code{
            margin: 1rem 0;
            .wxpay-code-img{
                text-align: center;
                margin: 0.35rem 0;
                & > img{
                    width:3.46667rem;
                    height:3.46667rem;
                    border: 1px dashed $normalFT-color
                }
            }
            .wxpay-code-text{
                text-align: center;
                margin-bottom: 0.35rem;
                font-size:0.346667rem;
            }
        }
        .wxpay-title{
            color:$errorFT-color;
            font-size: 0.34667rem;
            & .wxpay-top-right{
                font-size:0.4rem;
                color:$normalFT-color;
            }
        }
        .wxpay-prompt{
            color:$normalFT-color;
            font-size: 0.34667rem;
            margin: 0.5rem 0 1rem 0;
        }
        .wxpay-account{
            & input {
                width: 8.93rem;
                height: 1.29rem;
                outline: none;
                border: 0;
                padding-left: 0.4rem;
                color: $importFT-color;
                background:rgba(0,0,0,0.05);
                border-radius: 0.32rem;
                font-size: 0.4rem;
            }
        }
        & .pay-btn{
            background:$normalFT-color !important;
        }
        .pay-foot{
            display: flex;
            & span{
                flex:1;
            }
            & .pay-foot-top{
                background:$normalFT-color;
            }
            & .pay-foot-bottom{}
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
