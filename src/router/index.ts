import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

<<<<<<< HEAD
let router= new Router ({
        mode: 'history',
        base: process.env.BASE_URL,
        routes,
    });
export default router
=======
export default new Router(
    {
        mode: 'history',
        base: process.env.BASE_URL,
        routes,
    },
);
>>>>>>> 579af8b36466682b7a761a1904a41bb0db189406
