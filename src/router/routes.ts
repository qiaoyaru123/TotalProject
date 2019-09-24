
export default [
    {
        path: '/',
        redirect: "/login"
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue'),
    },
    {
        path: '/my',
        name: 'my',
        component: () => import('../views/my/index.vue'),
    },
    {
        path: '/myCollect',
        name: 'myCollect',
        component: () => import('../views/myCollect/index.vue'),
    },
    {
        path: '/mySite',
        name: 'mySite',
        component: () => import('../views/Mysite/index.vue'),
    },
    {
        path: '/addSite',
        name: 'addSite',
        component: () => import('../views/addSite/index.vue'),
    },
    
];
