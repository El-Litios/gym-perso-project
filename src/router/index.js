import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthRoutes from '../modules/auth/router'
import StudentsRoutes from '../modules/students/router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/auth',
    ...AuthRoutes
  },
  {
    path: '/students',
    ...StudentsRoutes
  }
]

const router = new VueRouter({
  routes
})

export default router
