import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        // name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '@/pages/index'),
        children: [
            {
                path: '/',
                // name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ '@/pages/home/Home')
            },
            {
                path: '/home',
                component: () => import(/* webpackChunkName: "home" */ '@/pages/home/Home')
            },
            {
                path: '/cssStyle',
                component: () => import(/* webpackChunkName: "home" */ '@/pages/cssStyle/CssStyle')
            },
            {
                path: '/jsScript',
                component: () => import(/* webpackChunkName: "home" */ '@/pages/jsScript/JsScript')
            },
            {
                path: '/vues',
                component: () => import(/* webpackChunkName: "home" */ '@/pages/vues/Vues')
            },
            {
                path: '/miniProgram',
                component: () => import(/* webpackChunkName: "home" */ '@/pages/miniProgram/MiniProgram')
            },
            {
                path: '/interview',
                component: () => import(/* webpackChunkName: "home" */ '@/pages/interview/Interview')
            }
        ]
    },
    {
        path: '/index',
        component: () => import(/* webpackChunkName: "index" */ '@/pages/index')
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

export default router;