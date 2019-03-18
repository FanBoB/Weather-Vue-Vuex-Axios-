import Vue from 'vue';
import ElementUI,{ Message } from 'element-ui';
import axios from 'axios'
import store from './store/index';

import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/reset.css'
import '../static/css/base.css'

import App from './App'
import router from './router'
import ComponentBase from './components/index'

Vue.config.productionTip = false
//重写路径 若生产环境 择请求其他网站接口 若开发环境 择请求开发测试接口 /api 择是跨域请求在 config/index.js =>proxyTable
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://v.juhe.cn/' : '/api';

Vue.use(ElementUI)
Vue.use(ComponentBase)
// Vue.use(moment)

Vue.prototype.$axios = axios
Vue.prototype.$message = Message

// axios.defaults.baseURL = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
