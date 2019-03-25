<template>
    <div class="topay-dialog" >123</div>
</template>

<script>
    export default {
        name: "dialog",
        template: '#dialog',
        data() {
            return {
            }
        },

        methods: {
        }
    }
</script>

<style lang="scss">
    .topay-dialog{
        width: 100vw;
        height: 100vh;
        background:rgba(0,0,0,0.2);
        position: fixed;
        z-index: 1000;
    }
</style>
