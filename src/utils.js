export const getDaysInYear = () => {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
  const oneDay = 1000 * 60 * 60 * 24
  return Math.floor(diff / oneDay)
}

export class DefaultMap {
  constructor (factory) {
    this.factory = factory
    this.map = new Map()
  }

  get (key) {
    if (!this.map.has(key)) {
      this.map.set(key, this.factory())
    }
    return this.map.get(key)
  }

  set (key, val) {
    this.map.set(key, val)
  }
}
