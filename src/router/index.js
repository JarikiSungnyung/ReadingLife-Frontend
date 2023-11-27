import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView'
import IntroView from '../views/IntroView.vue'
import WriteView from '../views/WriteView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/intro',
        name: 'intro',
        component: IntroView,
    },
    {
        path: '/create',
        name: 'create',
        component: WriteView,
    },
    {
        path: '/:book',
        name: 'book',
        component: DetailView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
