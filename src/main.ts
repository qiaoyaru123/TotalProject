import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Foot from './components/foot/index.vue';

Vue.config.productionTip = false;
Vue.component('Foot',Foot)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
