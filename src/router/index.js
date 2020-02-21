import Vue from 'vue'
import VueRouter from 'vue-router'
import Musicv2 from '../views/Home.vue'
import Musicv1 from '../views/Music.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Musicv2',
    component: Musicv2
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/musicv1',
    name: 'Musicv1',
    component: Musicv1
  }
]

const router = new VueRouter({
  routes
})

export default router
