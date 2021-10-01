import Users from './users'
import Profile from './profile'
import Wallets from './wallets'

class Client {
  constructor (token = null) {
    this.profile = new Profile(token)
    this.users = new Users(token)
    this.wallets = new Wallets(token)
  }

  set token (token) {
    this.profile.token = token
    this.users.token = token
    this.wallets.token = token
  }
}

export default new Client()
