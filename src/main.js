// Basics
import { createApp } from 'vue'
import App from './App.vue'

// Vue stuff
import store from './store'
import router from './router'
import './registerServiceWorker'

// Icons
import registerIcons from '@/plugins/icons'

const app = createApp(App)
app.use(store)
app.use(router)

// Register plugins
registerIcons(app)

app.mount('#app')
