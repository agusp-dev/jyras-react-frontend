import { storageConstants } from '../redux/constants'

export const authHeader = () => {
  let user = JSON.parse(localStorage.getItem(storageConstants.LOGGED_USER))
  if (user && user.token) {
    return { 'Authorization': `Bearer ${user.token}` }
  }
  return {}
}