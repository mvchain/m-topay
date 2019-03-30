<template>
    <div class="my-confirm" v-show="show" id="confirmCon">
       <div class="confirm-container">
           <div class="confirm-top">
               {{message}}
           </div>
           <div class="confirm-foot">
               <span v-if="cancelBtn" class="confirm-close" @click="onClosed">{{cancelBtn}}</span>
               <span class="confirm-enter" @click="confirmHandler">{{confirmBtn}}</span>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "my-confirm",
        data() {
            return {
                show: true,
                message: '',
                cancelBtn: '',
                confirmBtn: ''
            }
        },

        methods: {
            onClosed(v) {
                this.close().then(this.cancelHandler)
            },
            confirmHandler() {
                if(this.onSuccess !== null) {
                    this.onSuccess()
                }
                this.close()
            }
        }
    }
</script>

<style lang="scss">
    @import '@/views/variable.scss';
    .my-confirm{
        width: 100vw;
        height: 100vh;
        background:rgba(0,0,0,0.3);
        position: fixed;
        z-index: 1000;
        top:0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:0.4rem;
        & .confirm-top{
            width: 6.96rem;
            height:3.06667rem;
            line-height: 0.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background:#fff;
            color:$normalFT-color;
            text-align: center;
        }
        & .confirm-foot{
            display: flex;
            height:1.17333rem;
            & .confirm-close,
            & .confirm-enter{
                flex:1;

                text-align: center;
                line-height: 1.17333rem;
            }

            & .confirm-close{
                background:#fff;
                color:$footBack-color;
                border: 1px solid $footBack-color;
            }
            & .confirm-enter{
                background:$footBack-color;
                color:#fff;
                flex:1;
            }
        }
        & .confirm-container{
            border-radius: 0.2133rem;
            overflow: hidden;
        }
    }
</style>
