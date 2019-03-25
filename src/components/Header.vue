<template>
    <div class="vpay-header">
        <span> < </span>
        <span>{{$route.meta.title}}</span>
    </div>
</template>

<script>
    export default {
        name: "vpay-header"
    }
</script>

<style lang="scss">
    @import '../views/variable';
    .vpay-header{
        background:#fff;
        & span{
            position: relative;
            bottom:-0.2rem;
            color:$titleFT-color;
        }
    }
</style>
