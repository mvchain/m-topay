<template>
    <div class="copy-btn">
        <span v-clipboard:copy="icode" v-clipboard:success="onCopy">复 制</span>
    </div>
</template>

<script>
    export default {
        name: "copy-btn",
        props: {
            icode: String
        },
        data() {
            return {}
        },
        methods: {
            onCopy() {
                this.$message({
                    message: '复制成功'
                })
            }
        }
    }
</script>

<style lang="scss">
    @import '../views/variable';
    .copy-btn {
        display: inline-block;
        & span{
            font-size:0.24rem;
            color:$normalFT-color;
            border-radius: 0.2rem;
            padding:1px 0.15rem;
            border:1px solid $normalFT-color;
        }
    }
</style>
