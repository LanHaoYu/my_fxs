import Vue from 'vue'
import VueRouter from 'vue-router'
import Lhy from '../components/lhy.vue'

Vue.use(VueRouter)

const routes = [
    {
      path:"/detail",
      component:()=>import("@/views/detail")
    },
  {
    path: '/lhy',
    component: Lhy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
