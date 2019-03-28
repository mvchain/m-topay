<template>
    <div class="login container">
        <div class="container-main">
            <div style="margin-bottom:0.32rem;">
                <div><input v-model="cellphone" type="tel" class="login-input" placeholder="输入手机号"></div>
                <p>{{cellphoneError}}</p>
            </div>
            <div>
                <div style="position: relative;line-height: 1.29rem;">
                    <input type="number" v-model="validCode" class="login-input" placeholder="输入验证码">
                    <span class="login-code" style="line-height: 1.4rem;" @click="countDown">{{validateTxt}}</span>
                </div>
                <p>{{codeErrorMsg}}</p>
            </div>
        </div>
        <div class="login-server">
            <span>本服务由Topay提供</span>
        </div>
        <!--<div class="container-btn" @click="$router.push('confirm')">确 认</div>-->
        <div class="container-btn" @click="confirmHandler">确 认</div>
    </div>

</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                cellphone: '18868741236',
                validCode: '372810',
                codeErrorMsg: '',
                validateTxt: '发送验证码',
                totalTime: 30,
                canClick: true,
                cellphoneError: ''
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
                    this.$store.dispatch('orderExist', res.token).then((res) => {
                        console.log(res)
                        if (res.data === null) {
                            this.$router.push('confirm')
                        } else {
                            this.$router.push('order')
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
            }
        }
    }
</script>

<style lang="scss">
    @import '../views/variable';
    .login{
        .container-main{
            margin-top: 1.68rem;
            .login-input{
                width:8.93rem;
                height:1.29rem;
                outline: none;
                border:0;
                padding-left:0.4rem;
                color:$importFT-color;
                background:rgba(0,0,0,0.05);
                border-radius:0.32rem;
                font-size:0.4rem;
            }
            .login-code{
                position: absolute;
                top:0;
                right:0.5rem;
                font-size:0.373333rem;
                color:$footBack-color;
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
