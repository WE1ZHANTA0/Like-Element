// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import goods from 'components/goods/goods.vue'
import seller from 'components/seller/seller.vue'
import ratings from 'components/ratings/ratings.vue'

import './common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/goods'
    },
    {
      path:'/goods',
      component: goods
    },
    {
      path:'/seller',
      component: seller
    },
    {
      path:'/ratings',
      component: ratings
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
