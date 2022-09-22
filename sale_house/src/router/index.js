import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import PromotionView from '@/views/PromotionView.vue'
import TypeView from '@/views/TypeView.vue'
import Testpano from '@/views/TestPanoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    component: ContactView
  },
  {
    path: '/promotion',
    component: PromotionView
  },
  {
    path: '/type',
    component: TypeView
  },
  {
    path: '/test',
    component: Testpano
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
