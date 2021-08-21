// Basics
import { createApp } from 'vue'
import App from './App.vue'

// Vue stuff
import store from './store'
import router from './router'
import './registerServiceWorker'

// Css
import '@/styles.scss'

// Icons
import '@/plugins/font-awesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
app.use(store)
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
