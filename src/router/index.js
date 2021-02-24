import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/login/Register.vue'
import Homepage  from '../views/homePage/HomePage.vue'
import Technology from '../views/technology/Technology.vue'
import Essay from '../views/essay/Essay.vue'
import Message from '../views/message/Message.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/technology',
    name: 'Technology',
    component: Technology
  },
  {
    path: '/essay',
    name: 'Essay',
    component: Essay
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
