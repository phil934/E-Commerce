import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ShoppingMall from '@/components/ShoppingMall'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'ShoppingMall', component: ShoppingMall }
]

const router = new VueRouter({
  routes
})

export default router
