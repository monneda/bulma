import { createStore } from 'vuex'

import user from '@/store/module.user'

export default createStore({
  modules: {
    user
  }
})
