import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import Foot from './components/foot/index.vue';

Vue.config.productionTip = false;

Vue.component('Foot',Foot)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
