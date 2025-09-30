

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'  
import './assets/main.css'
import { createPinia } from 'pinia'


createApp(App)
  .use(router)  // <-- registriraj router
  .use(createPinia())
  .mount('#app')
