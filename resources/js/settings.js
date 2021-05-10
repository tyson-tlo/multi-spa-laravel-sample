import Vue from 'vue'
import VueRouter from 'vue-router'
import SettingsHome from './components/settings/SettingsHome.vue'
import SettingsProfile from './components/settings/SettingsProfile.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/settings/', component: SettingsHome },
    { path: '/settings/profile', component: SettingsProfile },
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

window.Vue = Vue

const app = new Vue({
    router
}).$mount('#app')