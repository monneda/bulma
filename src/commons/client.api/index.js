import Comments from './comments'
import Feed from './feed'
import Profile from './profile'
import Users from './users'
import Wallets from './wallets'

class Client {
  constructor (token = null) {
    this.feed = new Feed(token)
    this.comments = new Comments(token)
    this.profile = new Profile(token)
    this.users = new Users(token)
    this.wallets = new Wallets(token)
  }

  set token (token) {
    this.comments.token = token
    this.feed.token = token
    this.profile.token = token
    this.users.token = token
    this.wallets.token = token
  }
}

export default new Client()
