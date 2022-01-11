
const BASE = process.env.NODE_ENV === 'production'
  ? 'https://monneda.herokuapp.com/api' // prd
  : 'http://localhost:8088/api' // dev

export default class {
  constructor (token) {
    this.token = token
  }

  async request (meth, path, opts = {}, json = true) {
    let url = [BASE, path].join('/')
    url = new URL(url)

    if (!opts.headers) {
      opts.headers = {}
    }

    if (opts.params) {
      const entries = Object.entries(opts.params)
      for (const [key, val] of entries) {
        url.searchParams.append(key, val)
      }
    }

    if (this.token !== null) {
      opts.headers.Authorization = `Bearer ${this.token}`
    }

    const options = {
      method: meth,
      mode: 'cors',
      ...opts
    }

    const response = await fetch(url, options)

    if (!response.ok) {
      throw response
    }

    if (json) {
      return await response.json()
    } else {
      return response
    }
  }
}
