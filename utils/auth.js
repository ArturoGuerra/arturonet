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
  const roles = user[process.env.AUTH0_NAMESPACE + '/roles']
  return roles.indexOf('admin') > -1
}

export const getUserFromLocalStorage = () => {
  if (process.server) return undefined
  const json = localStorage.user
  return json ? JSON.parse(json) : undefined
}

export const getUserFromCookie = (req) => {
  if (!req.cookies) return
  const jwt = req.cookies.id_token // eslint-disable-line camelcase
  if (!jwt) return
  return jwtDecode(jwt)
}

export const getTokenFromLocalStorage = () => {
  if (process.server) return undefined
  const token = localStorage.id_token // eslint-disable-line camelcase
  return token || undefined
}

export const getTokenFromCookie = (req) => {
  if (!req.cookies) return
  const jwt = req.cookies.id_token // eslint-disable-line camelcase
  return jwt
}

export const getAccessTokenFromLocalStorage = () => {
  if (process.server) return undefined
  const token = localStorage.access_token // eslint-disable-line camelcase
  return token || undefined
}

export const getAccessTokenFromCookie = (req) => {
  if (!req.cookies) return
  const jwt = req.cookies.access_token // eslint-disable-line camelcase
  return jwt
}

export const isValid = () => {
  if (process.server) return true
  let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
  let currentTime = new Date().getTime() / 1000
  return currentTime < expiresAt
}

export const setSession = () => {
  if (process.server) return
  const { id_token, state, access_token } = getQueryParams() // eslint-disable-line camelcase
  let decoded = jwtDecode(id_token)
  localStorage.setItem('id_token', id_token)
  localStorage.setItem('user', JSON.stringify(decoded))
  localStorage.setItem('secret', state)
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('expires_at', decoded.exp)
  Cookie.set('id_token', id_token)
  Cookie.set('access_token', access_token)
}

export const deleteSession = () => {
  if (process.server) return
  localStorage.removeItem('id_token')
  localStorage.removeItem('user')
  localStorage.removeItem('secret')
  localStorage.removeItem('access_token')
  localStorage.removeItem('expires_at')
  localStorage.setItem('logout', Date.now())
  Cookie.remove('id_token')
  Cookie.remove('access_token')
}

export const setSecret = (secret) => localStorage.setItem('secret', secret)

export const checkSecret = (secret) => localStorage.secret === secret
