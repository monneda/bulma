import Base from './client'

export default class extends Base {
  fetch (id) {
    return this.request('GET', `comments/${id}`)
  }

  delete (id) {
    return this.request('DELETE', `comments/${id}`)
  }
}
