import { createStore } from 'vuex'

import user from '@/store/module.user'
import feed from '@/store/module.feed'

export default createStore({
  modules: {
    user,
    feed
  }
})
