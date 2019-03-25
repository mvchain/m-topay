<template>
    <div class="wxpay container">
        <div class="container-main">
            <div class="wxpay-pay">
                <div class="flex-left">
                    <p>购买USDT</p>
                    <p>剩余收款时间</p>
                </div>
                <div class="flex-right">
                    <p  class="wxpay-top-pay wxpay-top-right">{{icode}}USDT <copy-btn :icode="icode"></copy-btn></p>
                    <p class="wxpay-top-time wxpay-top-right">15分30秒</p>
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
                        李某某 <copy-btn :icode="cName"></copy-btn>
                    </p>
                    <p class="wxpay-top-right">123445 <copy-btn :icode="aliAccount"></copy-btn></p>
                </div>
            </div>
            <div class="wxpay-code">
                <div class="wxpay-code-img">
                    <img :src="codeImg" alt="">
                </div>
                <div class="wxpay-code-text">微信收款二维码</div>
            </div>
            <div class="wxpay-account">
                <input type="text" placeholder="请输入付款账号">
            </div>
            <div class="wxpay-prompt">请务必输入付款账号，以便进行下一步操作。</div>
        </div>
        <div>
            <div class="container-btn" @click="$router.push('bank')">确认完成付款</div>
        </div>
    </div>
</template>

<script>
    import code from '../assets/logo.png';
    import copyBtn from '../components/CopyBtn';
    export default {
        name: 'wx-pay',
        data() {
            return {
                codeImg: code,
                icode: '1234.6456',
                cName: '啊啊啊',
                aliAccount: '18858585858'
            }
        },
        components: {
            copyBtn
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
                color:$errorFT-color;
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

    }
</style>
