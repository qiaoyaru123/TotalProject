import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import Foot from './components/foot/index.vue';
import LyTab from 'ly-tab';



Vue.config.productionTip = false;

Vue.config.productionTip = false;
Vue.component('Foot',Foot);
Vue.use(LyTab)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
