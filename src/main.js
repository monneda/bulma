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
import ui from '@/plugins/ui'
import gtag from '@/plugins/gtag'
import icons from '@/plugins/icons'
import meili from '@/plugins/meili'

const app = createApp(App)
window.app = app

app.use(store)
app.use(router)

app.use(ui)
app.use(icons)
app.use(meili)

if (process.env.NODE_ENV === 'production') {
  app.use(gtag, { router })
}

app.mount('#app')
