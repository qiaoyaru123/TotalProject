import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import Foot from './components/foot/index.vue';
import { Area } from 'vant';
import VueLazyload from 'vue-lazyload'
import 'vant/lib/area/style';
Vue.use(Area);
Vue.use(VueLazyload, {
  preLoad: 1,
  error: 'http://img0.imgtn.bdimg.com/it/u=3790684772,3719055722&fm=26&gp=0.jpg',
  loading: 'http://img2.imgtn.bdimg.com/it/u=1872370659,42226841&fm=26&gp=0.jpg',
  attempt: 1
})

Vue.component('Foot',Foot)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
