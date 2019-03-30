<template>
    <div class="my-message">
        <transition name="fade">
            <p style="margin:0;" v-show="show">{{message}}</p>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "my-message",
        data() {
            return {
                message: '',
                show: false
            }
        },
        mounted() {
            setTimeout(() => {
                this.close()
            }, 2000)
        },
        methods: {
            onClosed(v) {

            },
            confirmHandler() {
            }
        }
    }
</script>

<style lang="scss">
    @import '@/views/variable.scss';
    .my-message{
        width:60vw;
        height:8vh;
        position: absolute;
        right:20vw;
        font-size:0.4rem;
        line-height: 8vh;
        text-align: center;
        top:10vh;
        background:#5c6885;
        color:#fff;
    }
     .fade-enter-active,  .fade-leave-active{
        transition: all 1s ease
    }

     .fade-enter,  .fade-leave-active{
        opacity: 0
    }

</style>
