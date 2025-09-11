import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
                    // ovdje kasnije možeš dodati pamuk, vuna, sport rute
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
