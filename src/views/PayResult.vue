<template>
    <div class="pay-result container">
        <div class="container-main">
            <div class="result-title">
                <div class="flex-left">
                    <p>购买USDT</p>
                </div>
                <div class="flex-right">
                    <p>已付款</p>
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
                    <p>完成付款时间</p>
                </div>
                <div class="flex-right">
                    <p>123456.000USDT</p>
                    <p>12345</p>
                    <p>智障障</p>
                    <p>1234566.093USDT</p>
                    <p>122</p>
                    <p>2019-03-23 15:12:12</p>
                    <p>2019-03-23 15:12:12</p>
                </div>
            </div>
        </div>
        <div >
            <div class="container-btn result-btn">
                <span>遇到问题?</span>
                <span @click="$router.push('alipay')">等待对方确定收款</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pay-result'
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
