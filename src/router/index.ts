import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    let isLogin = window.localStorage.getItem("x-nideshop-token");
    if (isLogin) {
        //如果用户信息存在则往下执行。
        next()
    } else {
        //如果用户token不存在则跳转到login页面
        if (to.path === '/login') {
            next()
        } else {
            next('/login')
        }
    }
});

export default router
