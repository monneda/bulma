import Profile from './profile'

class Client {
  constructor (token = null) {
    this.profile = new Profile(token)
  }

  set token (token) {
    this.profile.token = token
  }
}

export default new Client()
