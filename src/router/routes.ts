
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
    {
        path: '/goodsDetail',
        name: 'goodsDetail',
        component: () => import('../views/goodsDetail/index.vue'),
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
        path: '/sortxiang/:id',
        name: 'sortxiang',
        component: () => import('../views/sort/xiang.vue'),
    },{
        path:'/sortshop',
        name: 'sortshop',
        component: () => import('../views/sort/detail.vue'),
    },
    {
        path:'/sortsearch',
        name: 'sortsearch',
        component: () => import('../views/sort/search.vue'),
    }
];
