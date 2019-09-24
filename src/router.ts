import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/index.vue';
import My from './views/my/index.vue';
import Shop from './views/shop/index.vue';
import Sort from './views/sort/index.vue';
import Subject from './views/subject/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ()=>import('./views/home/index.vue'),
    },
    {
      path:'/my',
      name:'my',
      component: ()=>import('./views/my/index.vue')
    },
    {
      path:'/shop',
      name:'shop',
      component: ()=>import('./views/shop/index.vue')
    },
    {
      path:'/sort',
      name:'sort',
      component: ()=>import('./views/sort/index.vue')
    },
    {
      path:'/subject',
      name:'subject',
      component: ()=>import('./views/subject/index.vue')
    },
    {
      path:'/',
      redirect:'home'
    }
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    
  ],
});
