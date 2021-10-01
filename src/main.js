// Basics
import { createApp } from 'vue'
import App from '@/App'

// Vue stuff
import store from '@/store'
import router from '@/router'
import '@/registerServiceWorker'

// SCSS
import '@/assets/scss/index.scss'

// Icons
import registerIcons from '@/plugins/icons'

const app = createApp(App)
window.app = app

app.use(store)
app.use(router)

// Register plugins
registerIcons(app)

app.mount('#app')
