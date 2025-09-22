import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Search from './components/Search.vue'
import Mysstrumpa from './pages/Mysstrumpa.vue'
import Sockvännen from './pages/Sockvännen.vue'



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
  },
  
  {
    path: '/mysstrumpa',
    name: 'Mysstrrumpa',
    component: Mysstrumpa
  },

  {
    path: '/sockvännen',
    name: 'Sockvännen',
    component: Sockvännen
  }
  
  // ovdje kasnije možeš dodati pamuk, vuna, sprt
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
