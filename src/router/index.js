import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AboutUs from '../pages/AboutUs.vue'
import Features from '../pages/Features.vue'
import Pricing from '../pages/Pricing.vue'
import Faq from '../pages/Faq.vue'
import Blog from '../pages/Blog.vue'
import ContactUs from '../pages/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/features',
      name: 'features',
      component: Features
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    }
  ]
})

export default router
