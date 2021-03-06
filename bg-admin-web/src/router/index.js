import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        require(['../view/login/login.vue'], resolve);
      }
    },
    {
      path: '/main',
      name: 'main',
      component: resolve => {
        require(['../view/main/main.vue'], resolve);
      }
    }
  ]
})
