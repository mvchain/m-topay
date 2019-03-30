<template>
    <div class="bank container">
        <div class="container-main">
            <div class="bank-pay">
                <div class="flex-left">
                    <p>待付款</p>
                    <p>剩余付款时间</p>
                </div>
                <div class="flex-right">
                    <p  class="bank-top-pay bank-top-right">{{Math.floor(orderInfo.amount * 100) / 100}} CNY <copy-btn :icode="String(orderInfo.amount)"></copy-btn></p>
                    <p class="bank-top-time bank-top-right">
                        <count-down :endTime="orderInfo.limitTime"></count-down>
                    </p>
                </div>
            </div>
            <div class="bank-title">请使用银行卡向该账户转账</div>
            <div class="bank-info">
                <div class="flex-left">
                    <p>开户行</p>
                    <p>开户支行</p>
                    <p>收款人</p>
                    <p>银行卡号</p>
                </div>
                <div class="flex-right">
                    <p class="bank-top-right">
                        {{shopPayInfo.bank}} <copy-btn :icode="shopPayInfo.bank"></copy-btn>
                    </p>
                    <p class="bank-top-right">{{shopPayInfo.branch}} <copy-btn :icode="shopPayInfo.branch"></copy-btn></p>
                    <p class="bank-top-right">
                        {{shopPayInfo.accountName}} <copy-btn :icode="shopPayInfo.accountName"></copy-btn>
                    </p>
                    <p class="bank-top-right">
                        {{shopPayInfo.paymentAccount}} <copy-btn :icode="shopPayInfo.paymentAccount"></copy-btn>
                    </p>
                </div>
            </div>

            <div class="bank-account">
                <input type="text" placeholder="请输入付款账号" v-model="payAccount">
            </div>
            <div class="bank-prompt">请务必输入付款账号，以便进行下一步操作。</div>
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
        name: 'bank-card',
        data() {
            return {
                payAccount: '',
                payBtnFlag: false,
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
                shopPayInfo: 'shopPayInfo'
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
                this.$store.dispatch('postOrderStatus', {payAccount: this.payAccount, id: this.orderInfo.id, status: 1, payType: 1})
                    .then(() => {
                        this.$router.push('result')
                    }).catch()
            }
        }
    }
</script>

<style lang="scss">
    @import '../views/variable';
    .bank{
        .bank-pay,
        .bank-info{
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
            & .bank-top-right{
                text-align: right;
            }
        }
        .bank-info{
            line-height: 1rem;
        }
        .bank-pay{
            .bank-top-pay{
                font-size:0.45333rem;
                color:$importFT-color;
                font-weight: 900;
            }

            .bank-top-time{
                font-size:0.48rem;
                font-weight: 900;
                color: $importFT-color;
            }
        }

        .bank-code{
            margin: 1rem 0;
            .bank-code-img{
                text-align: center;
                margin: 0.35rem 0;
                & > img{
                    width:3.46667rem;
                    height:3.46667rem;

                }
            }
            .bank-code-text{
                text-align: center;
                margin-bottom: 0.35rem;
                font-size:0.346667rem;
            }
        }
        .bank-title{
            color:$errorFT-color;
            font-size: 0.34667rem;
            & .bank-top-right{
                font-size:0.4rem;
                color:$normalFT-color;
            }
        }
        .bank-prompt{
            color:$normalFT-color;
            font-size: 0.34667rem;
            margin: 0.5rem 0 1rem 0;
        }
        .bank-account{
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
