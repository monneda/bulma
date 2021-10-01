import Base from './client'

export default class extends Base {
  byUsername (username) {
    return this.request('GET', `users/${username}/wallets`)
  }

  byId (id, days = 30) {
    return this.request('GET', `wallets/${id}`, { params: { days } })
  }
}
