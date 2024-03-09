import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import AboutUs from '@/pages/AboutUs.vue'
import Features from '@/pages/Features.vue'
import Pricing from '@/pages/Pricing.vue'
import Portfolio from '@/pages/Portfolio.vue'
import PortfolioSingle from '@/pages/PortfolioSingle.vue'
import Blog from '@/pages/Blog.vue'
import BlogSingle from '@/pages/BlogSingle.vue'
import ContactUs from '@/pages/ContactUs.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'

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
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/:id',
      name: 'PortfolioSingle',
      component: PortfolioSingle,
      props: true
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'BlogSingle',
      component: BlogSingle,
      props: true
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    }
  ]
})

export default router
