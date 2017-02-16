// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/all.css'
import './assets/animate.css'

import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'

window.config = {
	url : "http://192.168.1.103/imooc" //本地调试地址
	//url : "http://chenxizihui.gotoip2.com" //网上地址
};

Vue.use(VueResource)
Vue.use(VueLazyload, {
    error: require('./assets/loading.svg'),
    loading: require('./assets/loading.svg'),
    attempt: 1
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
