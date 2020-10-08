import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/Parent.vue'),
      redirect: '/form'
    },
    {
      path: '/home/:id',
      name: 'home',
      component: () => import('../views/Home'),
      children: [{
        path: '/child',
        component: () => import('../views/Son')
      }]
    },
    {
      path: '/layout',
      component: () => import('../views/element/Layout.vue')
    },
    {
      path: '/pup',
      component: () => import('../views/element/Pup.vue')
    },
    {
      path: '/table',
      component: () => import('../views/element/Table.vue')
    },
    {
      path: '/form',
      component: () => import('../views/element/Form.vue')
    }
  ]
})
