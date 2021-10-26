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
import registerUi from '@/plugins/ui'
import registerGTag from '@/plugins/gtag'
import registerIcons from '@/plugins/icons'
import registerMeili from '@/plugins/meili'

const app = createApp(App)
window.app = app

app.use(store)
app.use(router)

registerUi(app)
registerIcons(app)
registerMeili(app)

if (process.env.NODE_ENV === 'production') {
  registerGTag(app, router)
}

app.mount('#app')
