import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'normalize.css'
import 'amfe-flexible'
import VueClipboard from 'vue-clipboard2'
import './icons/index'
import myConfirm from './components/index.js'
import * as filters from './filters'; // 全局filter

Vue.config.productionTip = false
Vue.use(VueClipboard);
Vue.use(myConfirm);
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
