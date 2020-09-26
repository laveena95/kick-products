import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Menu from '../views/Menu.vue'
import Contact from '../views/Contact.vue'
import Tea from '../views/Tea.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/tea',
    name: 'Tea',
    component: Tea
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
