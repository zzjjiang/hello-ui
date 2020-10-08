import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/parent',
      component: () => import('../views/Parent.vue')
    },
    {
      path: '/home/:id',
      name: 'home',
      component: () => import('../views/Home'),
      children: [{
        path: '/child',
        component: () => import('../views/Son')
      }]
    }
  ]
})
