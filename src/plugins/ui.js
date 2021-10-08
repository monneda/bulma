import * as ui from '@/ui'

export default app => {
  const entries = Object.entries(ui)
  for (const [key, val] of entries) {
    app.component(key, val)
  }
}
