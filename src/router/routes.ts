



export default [
    {
        path: '/',
        redirect: "/home"
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
        path: '/shop',
        name: 'shop',
        component: () => import('../views/shop/index.vue'),
    },
    {
        path: '/sort',
        name: 'sort',
        component: () => import('../views/sort/index.vue'),
    },
    {
        path: '/subject',
        name: 'subject',
        component: () => import('../views/subject/index.vue'),
    },
    {
        path: '/sortxiang',
        name: 'sortxiang',
        component: () => import('../views/sort/xiang.vue'),
    },{
        path:'/sortshop',
        name: 'sortshop',
        component: () => import('../views/sort/detail.vue'),
    }
];
