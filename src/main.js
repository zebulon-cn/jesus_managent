import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

import Cookies from 'js-cookie'

import Element from 'element-ui'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

//css
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

Vue.config.productionTip = false

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
