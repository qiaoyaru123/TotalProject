import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import Foot from './components/foot/index.vue';
import VueLazyload from 'vue-lazyload';
import LyTab from 'ly-tab';
import 'vant/lib/area/style';
import { Area } from 'vant';


Vue.use(Area);
Vue.use(VueLazyload, {
  preLoad: 1,
  error: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3290263709,2757473790&fm=26&gp=0.jpg',
  loading: 'http://img4.imgtn.bdimg.com/it/u=43815600,1195518016&fm=15&gp=0.jpg',
  attempt: 1
})

Vue.use(LyTab)



Vue.config.productionTip = false;
Vue.component('Foot',Foot);





new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
