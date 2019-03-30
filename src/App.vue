<template>
    <div id="app">
        <header>
            <Header class="vpay-header"></Header>
        </header>
        <main>
            <router-view/>
        </main>

    </div>
</template>
<script>
    import Header from "@/components/Header.vue";


    export default {
        name: 'App',
        components: {
            Header
        },
        /*mounted() {
            if (this.$route.name === 'login') return;
            try {
                let admin = window.mvc.getAdmin();
                if(Object.prototype.toString.call(admin) === '[object Object]') {
                    this.$store.commit('SET_ORDER_INFO', admin.order)
                    this.$store.commit('SET_REFRESH_TOKEN', admin.refreshToken)
                    setToken(admin.token);
                    this.$store.dispatch('orderExist', admin.token).then((res) => {
                        if (res.data === null && this.orderInfo === null) {
                            this.$router.push('carry')
                        } else if(this.orderInfo) {
                            if (res.data.orderStatus === 0) {
                                this.$router.push('order')
                            } else {
                                this.$router.push('result')
                            }
                        } else {
                            this.$router.push('confirm')
                        }
                    }).catch((err) => {

                    })
                }

            } catch {
                this.$router.push('/')
            }
        }*/
    }
</script>
<style lang="scss">
    @import './views/variable';

    * {
        box-sizing: border-box;
    }

    #app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow-y: hidden;
        & p {
            margin: 0;
        }
        & .container {
            display: flex;
            flex-direction: column;
            align-content: space-between;
            background: #F9F9F9;
            height: 100%;
        }
        & .container-main {
            flex-grow: 5;
            padding: 0 0.4rem;
        }
        & .container-btn {
            height: 1.28rem;
            background: $footBack-color;
            font-size: 0.4rem;
            text-align: center;
            line-height: 1.28rem;
            color: #fff;
            position: fixed;
            bottom: 0;
            width: 100vw;
        }
        header {
            height: 1.733rem;
            text-align: center;
            line-height: 1.73rem;
            font-size: 0.426667rem;
        }
        main {
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow-y: auto;
            margin-bottom: 1.28rem;
        }
    }
</style>
