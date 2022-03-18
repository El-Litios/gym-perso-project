import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthRoutes from '../modules/auth/router'
import StudentsRoutes from '../modules/students/router'
import { authen } from '../firebase'

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
    meta: { requiresAuthentication: true },
    ...StudentsRoutes
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuthentication)) {
    
    const user = authen.currentUser
    
    if(!user){
      next({ path: '/'} )
    }else{
      next()
    }

  }else{
    next()
  }
})

export default router
