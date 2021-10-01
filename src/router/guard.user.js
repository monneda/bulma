import store from '@/store'

import auth0 from '@/commons/auth.api'
import client from '@/commons/client.api'

import { SET_USER, SET_AUTH, SET_ERROR } from '@/store/type.mutations'

/**
 * Checks if user is logged in on every route
 */
export default async (to, from, next) => {
  if (store.state.user.auth === true) {
    return next()
  }

  try {
    client.token = await auth0.getTokenSilently()
    console.log(client)
    const user = await client.profile.get()
    store.commit(SET_ERROR, {})
    store.commit(SET_USER, user)
    store.commit(SET_AUTH, true)
  } catch (e) {
    console.error(e)
    client.token = null
    store.commit(SET_ERROR, e)
    store.commit(SET_USER, {})
    store.commit(SET_AUTH, false)
  }

  return next()
}
