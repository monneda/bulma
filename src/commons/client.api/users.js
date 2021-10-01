import Base from './client'

export default class extends Base {
  byUsername (username) {
    return this.request('GET', `users/${username}`)
  }
}
