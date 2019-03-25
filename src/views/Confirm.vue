<template>
    <div class="confirm container">
        <div class="container-main">
            <div class="confirm-top">
                <p class="confirm-top-title">充值金额</p>
                <p class="confirm-top-balance">1234.567CNY</p>
                <p class="confirm-top-bottom">≈ 123123.123USDT</p>
            </div>
            <div class="confirm-middle">下单后，如退出购买页面，下次点击充值会继续进行本次未结束充值订单</div>
        </div>

        <div>
            <div class="container-btn" @click="$router.push('order')">确认下单</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'confirm'
    }
</script>

<style lang="scss">
    @import '../views/variable';
    .confirm{
        .confirm-top{
            height:3.3333rem;
            background:#FFF;
            border-radius:0.2933rem;
            margin:0.32rem 0;
            text-align: center;
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
