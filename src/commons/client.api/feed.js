import Base from './client'

export default class extends Base {
  get (size = 20, beforeId) {
    const params = beforeId ? { size, before_id: beforeId } : { size }
    return this.request('GET', 'feed', { params })
  }

  deleteEvent (id) {
    return this.request('DELETE', `events/${id}`, {}, false)
  }
}
