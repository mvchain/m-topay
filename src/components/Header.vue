<template>
    <div class="vpay-header">
        <div class="icon-back-con">
            <svg-icon class="icon-back"  icon-class="back"></svg-icon>
        </div>
        <div class="vpay-header-title">{{$route.meta.title}}</div>
    </div>
</template>

<script>

    import svgIcon from '@/components/SvgIcon'
    export default {
        name: "vpay-header",
        components: {
            svgIcon
        }
    }
</script>

<style lang="scss">
    @import '../views/variable';
    .vpay-header{
        background:#fff;
        display: flex;
        padding:0 0.4rem;
        & .vpay-header-title {
            color:$titleFT-color;
            flex:1;
            text-align: center;
        }
        & .icon-back-con{
            width:0.24rem;
            & .icon-back{
                width:0.24rem;
                height:0.48rem;
            }


        }
    }
</style>
