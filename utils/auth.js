import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}
export const isAdmin = (user) => {
  if (!user) return false
  const roles = user['https://api.arturonet.com/roles']
  return roles.indexOf('admin') > -1
}

export const getUserFromLocalStorage = () => {
  if (process.server) return undefined
  const json = localStorage.user
  return json ? JSON.parse(json) : undefined
}

export const getUserFromCookie = (req) => {
  if (!req.headers.cookie) return
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
  if (!jwtCookie) return
  const jwt = jwtCookie.split('=')[1]
  return jwtDecode(jwt)
}

export const getTokenFromLocalStorage = () => {
  if (process.server) return undefined
  const token = localStorage.id_token // eslint-disable-line camelcase
  return token || undefined
}

export const getTokenFromCookie = (req) => {
  if (!req.headers.cookie) return
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
  if (!jwtCookie) return
  const jwt = jwtCookie.split('=')[1]
  return jwt
}

export const setSession = () => {
  if (process.server) return
  const { id_token, state, access_token } = getQueryParams() // eslint-disable-line camelcase
  let decoded = jwtDecode(id_token)
  let expiresAt = JSON.stringify(
    decoded.exp * 1000 + new Date().getTime()
  )
  localStorage.setItem('id_token', id_token)
  localStorage.setItem('user', JSON.stringify(decoded))
  localStorage.setItem('secret', state)
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('expires_at', expiresAt)
  Cookie.set('jwt', id_token)
}

export const deleteSession = () => {
  if (process.server) return
  localStorage.removeItem('id_token')
  localStorage.removeItem('user')
  localStorage.removeItem('secret')
  localStorage.removeItem('access_token')
  localStorage.removeItem('expires_at')
  localStorage.setItem('logout', Date.now())
  Cookie.remove('jwt')
}

export const setSecret = (secret) => localStorage.setItem('secret', secret)

export const checkSecret = (secret) => localStorage.secret === secret
