import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import 'amfe-flexible'
import VueClipboard from 'vue-clipboard2'
import myConfirm from './components/index.js'

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(myConfirm)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
