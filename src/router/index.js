import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: {
            name: 'Home'
        },
        component: () => import(/* webpackChunkName: "index" */ '@/pages/index'),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ '@/pages/home/Home')
            },
            {
                path: '/cssStyle',
                name: 'CssStyle', 
                component: () => import(/* webpackChunkName: "CssStyle" */ '@/pages/cssStyle/CssStyle')
            },
            {
                path: '/jsScript',
                name: 'JsScript',
                component: () => import(/* webpackChunkName: "JsScript" */ '@/pages/jsScript/JsScript')
            },
            {
                path: '/vues',
                name: 'Vues',
                component: () => import(/* webpackChunkName: "Vues" */ '@/pages/vues/Vues')
            },
            {
                path: '/miniProgram',
                name: 'MiniProgram',
                component: () => import(/* webpackChunkName: "MiniProgram" */ '@/pages/miniProgram/MiniProgram')
            },
            {
                path: '/interview',
                name: 'Interview',
                redirect: {
                    name: 'JsQuestion'
                },
                component: () => import(/* webpackChunkName: "Interview" */ '@/pages/interview/Interview'),
                children: [
                    {
                        path: '/interview/JsQuestion',
                        name: 'JsQuestion',
                        component: () => import(/* webpackChunkName: "Interview" */ '@/pages/interview/JsQuestion')
                    },
                    {
                        path: '/interview/VueQuestion',
                        name: 'VueQuestion',
                        component: () => import(/* webpackChunkName: "Interview" */ '@/pages/interview/VueQuestion')
                    },
                    {
                        path: '/interview/Es6Question',
                        name: 'Es6Question',
                        component: () => import(/* webpackChunkName: "Interview" */ '@/pages/interview/Es6Question')
                    },
                    {
                        path: '/interview/CssQuestion',
                        name: 'CssQuestion',
                        component: () => import(/* webpackChunkName: "Interview" */ '@/pages/interview/CssQuestion')
                    }
                ]
            }
        ]
    },
    // {
    //     path: '/index',
    //     component: () => import(/* webpackChunkName: "index" */ '@/pages/index')
    // }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

export default router;