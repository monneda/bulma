import Base from './client'

export default class extends Base {
  fetchAsset (ticker, days = 30) {
    const params = { days }
    const upper = ticker.toUpperCase()
    return this.request('GET', `assets/${upper}`, { params })
  }

  fetchAssetIndicators (ticker) {
    const upper = ticker.toUpperCase()
    return this.request('GET', `assets/${upper}/indicators`)
  }

  fetchHistory (ticker, days = 30) {
    const params = { days }
    const upper = ticker.toUpperCase()
    return this.request('GET', `assets/${upper}/history`, { params })
  }
}
