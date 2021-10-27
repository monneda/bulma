import * as ui from '@/ui'

export default {
  install (app) {
    const entries = Object.entries(ui)
    for (const [key, val] of entries) {
      app.component(key, val)
    }
  }
}
