import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
//引入rem转换
import 'lib-flexible/flexible.js'

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
