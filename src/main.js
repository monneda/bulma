// Basics
import { createApp } from 'vue'
import App from '@/App'

// Vue stuff
import store from '@/store'
import router from '@/router'
import '@/registerServiceWorker'

// SCSS
import '@/assets/scss/index.scss'

// VueGtag
import VueGtag from 'vue-gtag'

// Plugins
import registerIcons from '@/plugins/icons'
import registerUi from '@/plugins/ui'
import registerMeili from '@/plugins/meili'

const app = createApp(App)
window.app = app

app.use(store)
app.use(router)
app.use(VueGtag, { config: { id: 'G-Q9Z4RTC40B' } }, router)

registerIcons(app)
registerUi(app)
registerMeili(app)

app.mount('#app')
