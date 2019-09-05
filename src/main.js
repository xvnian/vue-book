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
	//url : "http://192.168.1.103/imooc" //本地调试地址
	url : "http://www.xvnian.com" //网上地址
};

Vue.use(VueResource)
Vue.use(VueLazyload, {
    error: require('./assets/loading.svg'),
    loading: require('./assets/loading.svg'),
    attempt: 1
  }
)

window.previousHash = [location.hash]
window.isBack = false
window.flag = 0

window.weight = {
  'Main' : 1,
  'Search' : 2,
  'Channel' : 2,
  'Free' :2,
  'Book': 3,
  'Reader':4
}
router.beforeEach((to, from, next) => {
    // console.log(to.name)
    // // console.log(router.history.current.name)
    // console.log(from.name)
    // // console.log(window.previousHash + ' ----- ' + ('#' + to.path))
    // console.log(window.weight[to.name])
    // console.log(window.weight[from.name])
    // console.log(window.weight[to.name] < window.weight[from.name])
    if(from.name !== null){
      if(window.weight[to.name] < window.weight[from.name]){
        window.isBack = true
      }
    } 
    // if(window.previousHash[0] === ('#' + to.path)){
    //   window.isBack = true
    // }
    // console.log(window.flag++)

  // window.previousHash = location.hash
  // switch (this.props.location.action) {
  //     case 'PUSH':
  //         console.log('你是通过点击Link组件访问的');
  //         break;
  //     case 'POP':
  //         console.log('你是通过非Link访问的，可能是浏览器前进后退，用户刷新，直接在浏览器打开地址');
  //     case 'REPLACE':
  //         console.log('当前地址被替换掉');
  //         break;
  // }
  next()
})

router.afterEach(route => {
  // console.log(location.hash);
  
  // console.log(window.flag++)

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
