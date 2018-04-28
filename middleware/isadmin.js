import { isAdmin, getUserFromLocalStorage, getUserFromCookie } from '~/utils/auth'

export default function ({ server, req, redirect }) {
  if (server && !req) return
  const user = server ? getUserFromCookie(req) : getUserFromLocalStorage()
  if (!isAdmin(user)) {
    return redirect('/auth/login')
  }
}
