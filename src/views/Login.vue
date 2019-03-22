<template>
    <div class="login">
        <div class="login-main">
            <div style="margin-bottom:0.32rem;">
                <div><input type="tel" class="login-input" placeholder="输入手机号"></div>
                <p>请输入手机号码</p>
            </div>
            <div>
                <div style="position: relative;line-height: 1.29rem;">
                    <input type="number" class="login-input" placeholder="输入验证码">
                    <span class="login-code">获取验证码</span>
                </div>
                <p>验证码错误</p>
            </div>
        </div>
        <div class="login-server">
            <span>本服务由Topay提供</span>
        </div>
        <div class="login-btn" @click="$router.push('confirm')">确 认</div>
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
        display: flex;
        flex-direction: column;
        align-content: space-between;
        height:100%;
        .login-main{
            margin-top: 1.68rem;
            flex-grow:5;
            padding: 0 0.3rem;
            .login-input{
                width:8.93rem;
                height:1.29rem;
                outline: none;
                border:0;
                padding-left:0.4rem;
                color:$importFT-color;
                background:rgba(173,174,232,0.1);
                border-radius:0.32rem;
                font-size:0.5333rem;
            }
            .login-code{
                position: absolute;
                top:0;
                right:0.5rem;
                font-size:0.5067rem;
                color:$footBack-color;
            }
            & p{
                margin:0;
                font-size:0.4267rem;
                color:$errorFT-color;
                padding: 0.4rem 0 0.2rem 0.45rem;
            }
        }
        .login-server{
            text-align: center;
            font-size:0.45333rem;
            color:$normalFT-color;
            margin-bottom:0.4rem;
        }
        .login-btn{
            height:1.28rem;
            background:$footBack-color;
            font-size:0.533rem;
            text-align: center;
            line-height: 1.28rem;
            color:#fff;
        }
    }
</style>
