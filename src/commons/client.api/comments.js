import Base from './client'

export default class extends Base {
  byPostId (id, size = 5, beforeId) {
    const params = { size }
    if (beforeId) {
      params.before_id = beforeId
    }
    return this.request('GET', `events/${id}/comments`, { params })
  }

  postComment (itemId, comment) {
    const options = {
      body: JSON.stringify({ text: comment }),
      headers: { 'Content-Type': 'application/json' }
    }
    return this.request('POST', `events/${itemId}/comments`, options)
  }

  deleteComment (itemId, commentId) {
    return this.request('DELETE', `events/${itemId}/comments/${commentId}`, {}, false)
  }
}
