import Vue from 'vue'
import VueRouter from 'vue-router'
import register from "@/views/register/register";
import login from "@/views/login/login";
import home from "@/views/home/home"
Vue.use(VueRouter)

const routes = [
    {
        path: '/register',
        component: register,
    },
    {
        path: '/login',
        component: login,
    },
    {
        path: '/home',
        component: home,
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
