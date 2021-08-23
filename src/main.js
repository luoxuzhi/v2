// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import notify from '@/components/notification/index.js'
import message from '@/components/message/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './utils/index'
Vue.prototype.bus = new Vue()
Vue.use(notify)
Vue.use(message)

Vue.component('custom-title', {
  props: ['level'],
  render(h) {
    const { level, $slots } = this
    return h(`h${level}`, $slots.default)
  },
})

// import 'themesUI/lib/style.css'
// import  themesUI from 'themesUI'
// Vue.use(themesUI)

Vue.use(ElementUI)
// Vue.use(Select)
// Vue.use(Option)
// router.beforeEach((to,from,next)=>{
//   if (/^\/home$/.test(to.path)){
//     next({path:'/watch'})
//   }else {
//     next()
//   }
// })

// router.afterEach((to,from)=>{
//   if (/^\/home$/.test(to.path)) console.log('to:',to)
// })

// router.beforeResolve((to,from,next)=>{
//   console.log('to:',to)
//   next()
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // render(h){
  //   return h('div','text content create by render function')
  // }
  // components: { App },
  // template: '<App/>',
  render(h) {
    return h(App)
  },
})

// console.log('app:', app)
