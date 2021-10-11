import Base from './client'

export default class extends Base {
  get (size = 20, beforeId) {
    const params = beforeId ? { size, before_id: beforeId } : { size }
    return this.request('GET', 'feed', { params })
  }

  createEvent (item) {
    const options = {
      body: JSON.stringify(item),
      headers: { 'Content-Type': 'application/json' },
      params: { type: 'text' }
    }
    return this.request('POST', 'posts', options)
  }

  deleteEvent (id) {
    return this.request('DELETE', `events/${id}`, {}, false)
  }
}
