import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Detail from '@/pages/post/detail'
import Login from '@/pages/login/login'
import Register from '@/pages/login/register'
import Demo from '@/pages/demo/demo'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '',
      component: Home
    },
    {
      path: '/detail/:id/:nlist',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
