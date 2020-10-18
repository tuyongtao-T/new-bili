import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Toast } from 'vant';
import { Dialog } from 'vant';


Vue.use(Vant);
Vue.use(Toast);
Vue.use(Dialog);

Vue.prototype.$dialog = Dialog;
Vue.prototype.$toast = Toast;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
