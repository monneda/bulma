import Base from './client'

export default class extends Base {
  post () {
    return this.request('POST', 'profile')
  }

  get () {
    return this.request('GET', 'profile')
  }

  getSuggestedFriends (size = 15, page = 0) {
    return this.request('GET', `profile/suggestions?size=${size}&page=${page}`)
  }

  update (data) {
    const options = {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }
    return this.request('PATCH', 'profile', options)
  }
}
