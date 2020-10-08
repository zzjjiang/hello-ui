import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//   console.log(to.path)
//   console.log(from.path)
//   next()
// })
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
