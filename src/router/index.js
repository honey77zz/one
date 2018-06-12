import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Imagetext from '@/components/Imagetext'
import Listrouter from '@/components/Listrouter'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      component: Home,
      children:[
        {
          path: '/h1',
          component:Listrouter
        },
      ],
    },
    {
      path: '/home',
      name:'Home',
      component: Home
    },
    {
      path: '/imagetext',
      name:'Imagetext',
      component: Imagetext
    },
    {
      path: '/login',
      name:'Login',
      component: Login
    },
  ]
})
