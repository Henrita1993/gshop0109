import Vue from 'vue'
import Router from 'vue-router'
import MSite from "../pages/MSite/MSite.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
import Search from "../pages/Search/Search.vue"
import Login from "../pages/Login/Login.vue"





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/login',
      component: Login

    },
    {
      path: '/',
      redirect: '/msite'
    },

  ]
})
