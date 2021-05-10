import Vue from 'vue'
import VueRouter from 'vue-router'
// Vue components
import CustomersHome from './components/customers/CustomersHome.vue'
import CustomersProfile from './components/customers/CustomersProfile.vue'

Vue.use(VueRouter)

window.Vue = Vue

const routes = [
    { path: '/customers/', component: CustomersHome },
    { path: '/customers/profile', component: CustomersProfile },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    router
}).$mount('#app')