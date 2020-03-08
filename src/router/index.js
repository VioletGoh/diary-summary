import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '@/pages/index'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ '@/pages/home/Home')
            },
            {
                path: '/home',
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ '@/pages/home/Home')
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

export default router