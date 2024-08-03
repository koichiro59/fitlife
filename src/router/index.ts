import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Top from '../views/Top.vue'
import About from "../views/About.vue"
import Services from "../views/Services.vue"
import News from "../views/News.vue"
import Contact from "../views/Contact.vue"


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Top
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
