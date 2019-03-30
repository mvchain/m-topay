<template>
    <div class="login container">
        <div class="container-main">
            <div class="login-input-cellphone">
                <div><input v-model="cellphone" type="tel" class="login-input" placeholder="输入手机号"></div>

            </div>
            <p class="error-style">{{cellphoneError}}</p>
            <div>
                <div  class="login-input-code">
                    <input type="number" v-model="validCode" class="login-input" placeholder="输入验证码">
                    <span class="login-code"  @click="countDown">{{validateTxt}}</span>
                </div>
            </div>
            <p class="error-style">{{codeErrorMsg}}</p>
        </div>
        <div class="login-server">
            <span>本服务由Topay提供</span>
        </div>
        <!--<div class="container-btn" @click="$router.push('confirm')">确 认</div>-->
        <div class="container-btn" @click="confirmHandler">确 认</div>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import { setToken } from '@/utils/auth'
    export default {
        name: 'login',
        computed: {
            ...mapGetters({
                orderInfo: 'orderInfo',
            })
        },
        data() {
            return {
                cellphone: '18806716587',
                validCode: '555666',
                codeErrorMsg: '',
                validateTxt: '发送验证码',
                totalTime: 30,
                canClick: true,
                cellphoneError: ''
            }
        },
        mounted() {
            try {
                let stradmin = window.mvc.getAdmin()
                let admin = JSON.parse(stradmin)
                this.$store.commit('SET_ORDER_INFO', admin.order)
                this.$store.commit('SET_REFRESH_TOKEN', admin.refreshToken);
                setToken(admin.token);
                this.$store.dispatch('orderExist', admin.token).then((res) => {
                    // 如果没有未完成订单跳转到confirm页面
                    // 如果有未完成订单，跳转到order页面
                        // 如果未完成订单状态为已付款，跳转到结果页面
                    if (res.data === null ) {
                        this.$router.push('confirm')
                    } else  {
                        if (res.data.orderStatus === 0) {
                            this.$router.push('order')
                        } else {
                            this.$router.push('result')
                        }
                    }
                }).catch((err) => {

                })
            }catch {
            }
        },
        methods: {
            countDown() {
                if (!this.canClick) return; //改动的是这两行代码
                this.getValidateCode()
                this.canClick = false;
                this.validateTxt = this.totalTime + 's后重新发送';
                let clock = window.setInterval(() => {
                    this.totalTime--;
                    this.validateTxt = this.totalTime + 's后重新发送';
                    if (this.totalTime < 0) {
                        window.clearInterval(clock);
                        this.validateTxt = '重新发送验证码';
                        this.totalTime = 10;
                        this.canClick = true  //这里重新开启
                    }
                },1000)
            },
            confirmHandler() {
                if (!this.cellphone.trim()) {
                    this.cellphoneError = '请输入手机号码';
                    return;
                }

                this.$store.dispatch('Login', {cellphone: this.cellphone, validCode: this.validCode}).then((res) => {
                    this.setTokenToJava(JSON.stringify(res))
                    this.$store.dispatch('orderExist', res.token).then((res) => {
                        if (res.data === null && this.orderInfo === null) {
                            this.$router.push('carry') // 没有未完成订单且没有订单信息，去结果页
                        } else { // 如果有订单信息
                            // 判断是否有未完成订单，
                            if (!res.data) {
                                this.$router.push('confirm')
                            } else if (res.data && res.data.orderStatus === 0) {
                                this.$router.push('order')
                            } else {
                                this.$router.push('result')
                            }
                        }
                    }).catch()
                }).catch((err) => {
                    this.codeErrorMsg = err
                })
            },
            getValidateCode() {
                this.$store.dispatch('getValidate', this.cellphone).then((res) => {
                    this.$confirm({
                        message: '发送成功',
                        confirmBtn: '确定'
                    })
                }).catch()
            },
            setTokenToJava(res) {
                window.mvc.setToken(res)
            }
        }
    }
</script>

<style lang="scss">
    @import '../views/variable';
    .login{
        .container-main{
            margin-top: 1.68rem;
            .error-style{
                padding:0;
                margin: 0.3rem 0 !important;
            }
            .login-input{
                width:8.93rem;
                height:1.29rem;
                outline: none;
                border:0;
                padding-left:0.4rem;
                color:$importFT-color;
                background:transparent;
                border-radius:0.32rem;
                font-size:0.4rem;
            }
            .login-input-cellphone,
            .login-input-code{
                align-items: center;
                display: flex;
                background: rgba(0,0,0,0.05);
                border-radius:0.32rem;
                & .login-input{
                    flex:2;
                }
                & .login-code{
                    flex:1;
                    text-align: center;
                    font-size:0.373333rem;
                    color:$footBack-color;
                }
            }

            & p{
                font-size:0.3467rem;
                color:$errorFT-color;
                padding: 0.4rem 0 0.2rem 0.45rem;
            }
        }
        .login-server{
            text-align: center;
            font-size:0.346667rem;
            color:$normalFT-color;
            margin-bottom:0.4rem;
        }
    }
</style>
