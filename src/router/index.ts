import { createRouter, createWebHistory } from 'vue-router';
// import { staticRoutes } from './modules/staticRoutes';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/Login/index.vue')
        },
        {
            path: '/main',
            name: 'Main',
            component: () => import('@/views/Main/index.vue')
        },
        {
            path: '/:pathMatch(.*)',
            component: () => import('@/views/404/index.vue')
        }
    ]
});

export default router;
