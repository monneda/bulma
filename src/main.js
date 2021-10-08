// Basics
import { createApp } from 'vue'
import App from '@/App'

// Vue stuff
import store from '@/store'
import router from '@/router'
import '@/registerServiceWorker'

// SCSS
import '@/assets/scss/index.scss'

// Plugins
import registerIcons from '@/plugins/icons'
import registerUi from '@/plugins/ui'

const app = createApp(App)
window.app = app

app.use(store)
app.use(router)

registerIcons(app)
registerUi(app)

app.mount('#app')
