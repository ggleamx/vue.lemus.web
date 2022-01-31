import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeSearch from '../views/HomeSearch.vue'
import Neighborhoods from '../views/Neighborhoods.vue'
import VirtualTours from '../views/VirtualTours.vue'
import About from '../views/About.vue'
import Faqs from '../views/Faqs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/homesearch',
    name: 'home-search',
    component: HomeSearch
    
  },
  {
    path: '/neighborhoods',
    name: 'neighborhoods',
    component: Neighborhoods
  },
  {
    path: '/virtualtours',
    name: 'virtual-tours',
    component: VirtualTours

  },
  {
    path: '/about',
    name: 'about-us',
    component: About

  }, {
    path: '/faqs',
    name: 'faqs',
    component: Faqs

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
