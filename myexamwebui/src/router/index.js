import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import forgot from '@/components/forgot'
import homefirst from '@/components/homefirst'
import test from '@/components/test'
import upload from '@/components/upload'
import testface from '@/components/testface'
import axios from "axios"


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
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/testface',
      name: 'testface',
      component: testface
    }
  ]
})
