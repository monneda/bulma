import store from '@/store'

export default async (to, from, next) => {
  if (store.state.user.auth) {
    return next({ name: 'Feed' })
  }
  return next()
}
