<template>
    <div class="carry container">
        <div class="container-main" style="padding-top:1rem;line-height: 1rem;">
            <p>订单已取消</p>
            <p>您可关闭此页面</p>
        </div>
        <div>
            <div style="background:#F9F9F9;" class="container-btn "></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'carry-out'
    }
</script>

<style lang="scss">
    @import '../views/variable';
    .carry{
        text-align: center;
        color:$normalFT-color;
        font-size:0.5rem;
        background:#F9F9F9;
        & .container-main{
            padding-top:1rem;
        }
    }
</style>
