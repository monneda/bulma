import Base from './client'

export default class extends Base {
  react (id) {
    return this.request('POST', `events/${id}/reactions`, {}, false)
  }

  unreact (id) {
    return this.request('DELETE', `events/${id}/reactions`, {}, false)
  }

  reactions (id) {
    return this.request('POST', `events/${id}/reactions`, {}, false)
  }
}
