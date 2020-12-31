import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import $ from "jquery"
import VueRouter from "vue-router"

import vm_login from "./viewmodel/login.vue"
import check from "./viewmodel/check.vue"
import home from "./viewmodel/home.vue"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
const routes = [
    {
        path:"/login",
        name:"login",
        component:vm_login,
        meta:{
            auth:true
        }
    },
    {
        path:"/home",
        name:"home",
        component:home,
        meta:{
            auth:true
        }
    },
    {
        path:"/",
        name:"check",
        component:check,        
    },
]
const router = new VueRouter({
  routes
})

new Vue({
  
  router,
  render: h => h(App)
}).$mount('#app')







