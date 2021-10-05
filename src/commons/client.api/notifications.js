import Base from './client'

export default class extends Base {
  fetchPage (size = 10, beforeId) {
    const params = { size }
    if (beforeId !== undefined) {
      params.before_id = beforeId
    }
    return this.request('GET', 'notifications', { params })
  }

  fetchUnreadCount () {
    return this.request('GET', 'notifications/count')
  }
}
