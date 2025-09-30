import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

import Elegant from './pages/Elegant.vue'
import Winter from './pages/Winter.vue'
import Sports from './pages/Sports.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  

  {
    path: '/elegant',
    name: 'Elegant',
    component: Elegant
  },

  {
    path: '/winter',
    name: 'Winter',
    component: Winter
  },
  
  {
    path: '/sports',
    name: 'Sports',
    component: Sports
  }
  
  // ovdje kasnije možeš dodati pamuk, vuna, sport
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
