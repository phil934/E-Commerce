
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
import { Button, Row, Col, Swipe, SwipeItem, Lazyload } from 'vant'
require('./mock/index.js')
Vue.use(VueAwesomeSwiper /* { default options with global component } */)
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload)
Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
