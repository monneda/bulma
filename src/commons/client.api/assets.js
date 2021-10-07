import Base from './client'

export default class extends Base {
  fetchAsset (ticker, days = 30) {
    const params = { days }
    return this.request('GET', `assets/${ticker}`, { params })
  }

  fetchHistory (ticker, days = 30) {
    const params = { days }
    return this.request('GET', `assets/${ticker}/history`, { params })
  }
}
