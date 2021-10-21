import Base from './client'

export default class extends Base {
  byUsername (username) {
    return this.request('GET', `users/${username}/wallets`)
  }

  byId (id, days = 30, type) {
    const params = type ? { days, type } : { days }
    return this.request('GET', `wallets/${id}`, { params })
  }

  fetchHistory (id) {
    return this.request('GET', `wallets/${id}/history`)
  }

  update (id, data) {
    const options = {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }
    return this.request('PUT', `wallets/${id}`, options)
  }

  create (data) {
    const options = {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }
    return this.request('POST', 'wallets', options)
  }
}
