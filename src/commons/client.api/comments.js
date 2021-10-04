import Base from './client'

export default class extends Base {
  byPostId (id, size = 5, beforeId) {
    const params = { size }
    if (beforeId) {
      params.before_id = beforeId
    }
    return this.request('GET', `events/${id}/comments`, { params })
  }
}
