import auth0 from '@/commons/auth.api'
import client from '@/commons/client.api'

import { LOGIN, LOGOUT } from '@/store/type.actions'
import { SET_USER, SET_AUTH, SET_ERROR } from '@/store/type.mutations'

const state = {
  profile: {},
  error: {},
  auth: false
}

const mutations = {
  [SET_USER] (state, user) {
    state.profile = user
  },

  [SET_AUTH] (state, auth) {
    state.auth = auth
  },

  [SET_ERROR] (state, error) {
    state.error = error
  }
}

const actions = {
  async [LOGIN] (ctx, state = {}) {
    await auth0.loginWithRedirect({ appState: state })
  },

  async [LOGOUT] (ctx) {
    client.token = null
    ctx.commit(SET_USER, {})
    ctx.commit(SET_ERROR, {})
    ctx.commit(SET_AUTH, false)
    await auth0.logout()
  }
}

export default {
  state,
  actions,
  mutations
}
