<template>
  <div id="app">
    <header>
      <Header class="vpay-header"></Header>
    </header>
    <main class="vpay-">
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
        }
    }
</script>
<style lang="scss">
  #app{
    display:flex;
    flex-direction: column;
    align-content: space-between;
    height:100vh;
    header{
      height:1.733rem;
      text-align: center;
      line-height: 1.73rem;
      font-size:0.48rem;
    }
    main{
      flex-grow:5;
    }
  }
</style>
