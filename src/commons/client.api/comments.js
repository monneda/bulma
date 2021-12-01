import Base from './client'

export default class extends Base {
  fetch (id) {
    return this.request('GET', `comments/${id}`)
  }

  delete (id) {
    return this.request('DELETE', `comments/${id}`)
  }

  react (id) {
    return this.request('POST', `comments/${id}/reactions`)
  }

  unreact (id) {
    return this.request('DELETE', `comments/${id}/reactions`)
  }
}
