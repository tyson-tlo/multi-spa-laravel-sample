import Vue from 'vue'
import VueRouter from 'vue-router'

import SchedulingHome from './components/scheduling/SchedulingHome.vue'
import SchedulingCreate from './components/scheduling/SchedulingCreate.vue'

Vue.use(VueRouter)

window.Vue = Vue

const routes = [
    { path: '/scheduling/', component: SchedulingHome },
    { path: '/scheduling/create', component: SchedulingCreate },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    router
}).$mount('#app')