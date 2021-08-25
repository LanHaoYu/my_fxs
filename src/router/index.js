/*
 * @Author: your name
 * @Date: 2021-08-25 08:28:55
 * @LastEditTime: 2021-08-25 08:32:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my_fxs\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Lhy from '../components/lhy.vue'
import Xmy from '../components/xmy.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/detail",
        component: () => import ("@/views/detail")
    },
    {
        path: "/xmy2",
        component: () => import ("@/components/Xmy2")
    },
    {
        path: '/lhy',
        component: Lhy
    },
    {
        path: '/xmy',
        component: Xmy
    },
    {
        path: "/zpssss",
        component: () =>
            import ("@/views/zpssss")
    },
    {
        path: "/renovation",
        component: () =>
            import ("@/views/renovation")
    },

    {
        path: "/lx",
        component: () =>
            import ("../components/lx.vue")
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router