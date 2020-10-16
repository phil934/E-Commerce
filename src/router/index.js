import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ShoppingMall from '@/components/page/ShoppingMall'
import Register from '@/components/page/Register'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'ShoppingMall', component: ShoppingMall },
  { path: '/register', name: 'register', component: Register }

]

const router = new VueRouter({
  routes
})

export default router
