import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/page/index'], resolve)
const Login = resolve => require(['@/page/Login/login'], resolve)
const Home = resolve => require(['@/page/Home/home'], resolve)
const AppPayfulTest = resolve => require(['@/page/Service/appPayfulTest'], resolve)
const AppUsualTest = resolve => require(['@/page/Service/appUsualTest'], resolve)
const Shop = resolve => require(['@/page/Buy/shop'], resolve)
const Order = resolve => require(['@/page/Mine/order'], resolve)
const Faq = resolve => require(['@/page/About/faq'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
      children: [
        {path: 'home', component: Home},
        {path: 'apppay', component: AppPayfulTest},
        {path: 'appusual', component: AppUsualTest},
        {path: 'shop', component: Shop},
        {path: 'order', component: Order},
        {path: 'faq', component: Faq},
      ]
    },
    {path: '/login', name: 'login', component: Login},
    {path: '*', redirect: '/home'}
  ]
})
