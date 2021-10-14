import store from '@/store'

/**
 * Only allows the user to go to url if it is the "owner" of the view.
 *
 * Example:
 *   Only the user can go to its profile edit page
 */
export default async to => {
  if ('username' in to.params) {
    return store.state.user.profile.username === to.params.username
  }
  return false
}
