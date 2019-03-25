<template>
    <div class="login container">
        <div class="container-main">
            <div style="margin-bottom:0.32rem;">
                <div><input type="tel" class="login-input" placeholder="输入手机号"></div>
                <p>请输入手机号码</p>
            </div>
            <div>
                <div style="position: relative;line-height: 1.29rem;">
                    <input type="number" class="login-input" placeholder="输入验证码">
                    <span class="login-code" style="line-height: 1.4rem;">获取验证码</span>
                </div>
                <p>验证码错误</p>
            </div>
        </div>
        <div class="login-server">
            <span>本服务由Topay提供</span>
        </div>
        <div class="container-btn" @click="$router.push('confirm')">确 认</div>
    </div>

</template>

<script>
    export default {
        name: 'login'
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
