import Base from './client'

export default class extends Base {
  get (size = 20, beforeId) {
    if (beforeId) {
      return this.request('GET', `feed?size=${size}&before_id=${beforeId}`)
    }
    return this.request('GET', `feed?size=${size}`)
  }
}
