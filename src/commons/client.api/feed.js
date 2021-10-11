import Base from './client'

export default class extends Base {
  get (size = 20, beforeId) {
    const params = { size }
    if (beforeId) {
      params.before_id = beforeId
    }
    return this.request('GET', 'feed', { params })
  }
}
