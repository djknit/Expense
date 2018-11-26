import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/homebody.vue'
import CreateAccount from './components/createAccount.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create-account',
      name: 'home',
      component: CreateAccount
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/new-example',
      name: 'new-example',
      component: () => import(/* webpackChunkName: "example" */ './views/NewExample.vue')
    }
  ]
})
