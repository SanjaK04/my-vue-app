

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'  
import './assets/main.css'
import { createPinia } from 'pinia'
import Vue3Toastify, { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'


createApp(App)
  .use(router)  
  .use(createPinia())
  .use(Vue3Toastify, {
    autoClose: 2500,
    position: "top-right",
  })

  .mount('#app')
  
export { toast }