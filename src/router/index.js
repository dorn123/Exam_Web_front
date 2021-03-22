import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import forgot from '@/components/forgot'
import homefirst from '@/components/homefirst'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode:  'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: forgot
    },
    {
      path: '/homefirst',
      name: 'homefirst',
      component: homefirst
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
