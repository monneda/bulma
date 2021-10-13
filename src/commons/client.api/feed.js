import Base from './client'

export default class extends Base {
  fetchEvents (size = 100, beforeId) {
    const params = beforeId ? { size, before_id: beforeId } : { size }
    return this.request('GET', 'feed', { params })
  }

  fetchUserEvents (username) {
    return this.request('GET', `users/${username}/events`)
  }

  reactEvent (id) {
    return this.request('POST', `events/${id}/reactions`, {}, false)
  }

  unreactEvent (id) {
    return this.request('DELETE', `events/${id}/reactions`, {}, false)
  }

  createEvent (event) {
    const options = {
      params: { type: 'text' },
      body: JSON.stringify(event),
      headers: { 'Content-Type': 'application/json' }
    }
    return this.request('POST', 'posts', options)
  }

  deleteEvent (id) {
    return this.request('DELETE', `events/${id}`, {}, false)
  }

  fetchComments (id, size = 100, beforeId) {
    const params = beforeId ? { size, before_id: beforeId } : { size }
    return this.request('GET', `events/${id}/comments`, { params })
  }

  createComment (id, comment) {
    const options = {
      body: JSON.stringify(comment),
      headers: { 'Content-Type': 'application/json' }
    }
    return this.request('POST', `events/${id}/comments`, options)
  }

  deleteComment (id, cId) {
    return this.request('DELETE', `events/${id}/comments/${cId}`, {}, false)
  }
}
