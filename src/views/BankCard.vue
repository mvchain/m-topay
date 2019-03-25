<template>
    <div class="bank container">
        <div class="container-main">
            <div class="bank-pay">
                <div class="flex-left">
                    <p>购买USDT</p>
                    <p>剩余收款时间</p>
                </div>
                <div class="flex-right">
                    <p  class="bank-top-pay bank-top-right">{{icode}}USDT <copy-btn :icode="icode"></copy-btn></p>
                    <p class="bank-top-time bank-top-right">15分30秒</p>
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
                        {{bankName}} <copy-btn :icode="bankName"></copy-btn>
                    </p>
                    <p class="bank-top-right">123445 <copy-btn :icode="bankBranch"></copy-btn></p>
                    <p class="bank-top-right">
                        {{payee}} <copy-btn :icode="payee"></copy-btn>
                    </p>
                    <p class="bank-top-right">
                        {{bankNumber}} <copy-btn :icode="bankNumber"></copy-btn>
                    </p>
                </div>
            </div>

            <div class="bank-account">
                <input type="text" placeholder="请输入付款账号">
            </div>
            <div class="bank-prompt">请务必输入付款账号，以便进行下一步操作。</div>
        </div>
        <div>
            <div class="container-btn" @click="$router.push('result')">确认完成付款</div>
        </div>
    </div>
</template>

<script>
    import copyBtn from '../components/CopyBtn';
    export default {
        name: 'bank-card',
        data() {
            return {
                icode: '1234.6456',
                bankName: '农业银行',
                bankBranch: '杭州支行',
                payee: '张三',
                bankNumber: '6554554878548785'
            }
        },
        components: {
            copyBtn
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
                background: #fff;
                border-radius: 0.32rem;
                font-size: 0.4rem;
            }
        }

    }
</style>
