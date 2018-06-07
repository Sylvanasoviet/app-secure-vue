// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import { getCookie,setCookie,delCookie } from './utils/cookies'
import { setStore, getStore } from './utils/storage'
import './assets/bootstrap/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/skins/blue.css'
import './assets/css/custom.css'
import './assets/fonts/font-awesome/css/font-awesome.css'
import './assets/fonts/fontello/css/fontello.css'
import './assets/plugins/rs-plugin/css/settings.css'
import './assets/plugins/rs-plugin/css/extralayers.css'
import './assets/plugins/magnific-popup/magnific-popup.css'
import './assets/css/animations.css'
import './assets/plugins/owl-carousel/owl.carousel.css'

//cookie全局配置
Vue.config.productionTip = false
Vue.prototype.setCookie = setCookie
Vue.prototype.getCookie = getCookie
Vue.prototype.delCookie = delCookie

// 不需要登陆的页面 => 白名单
const whiteList = ['/home', '/login', '/faq']
router.beforeEach(function (to, from, next) {
  //let login = store.state.login
  let login = getCookie('login')
  console.log(login)
  // 没登录
  if (login) {
    //  跳转到
    if (to.path === '/login') {
      next({
        path: '/'
      })
    }
    next()
  } else {
    // 白名单
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
