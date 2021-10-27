import VueGtag from 'vue-gtag'

const config = { id: 'G-Q9Z4RTC40B' }

export default {
  install (app, { router }) {
    app.use(VueGtag, { config }, router)
  }
}
