import Base from './client'

export default class extends Base {
  byUsername (username) {
    return this.request('GET', `users/${username}`)
  }

  fetchFollowing (username) {
    return this.request('GET', `users/${username}/following`)
  }

  fetchFollowers (username) {
    return this.request('GET', `users/${username}/followers`)
  }
}
