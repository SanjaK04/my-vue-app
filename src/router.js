import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Search from './components/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
                
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
  
  
  // ovdje kasnije možeš dodati pamuk, vuna, sprt
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
