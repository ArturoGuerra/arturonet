import { setSecret } from './auth'
import uuid from 'uuid'

const getLock = (options) => {
  const { Auth0Lock } = require('auth0-lock')
  console.log(process.env)
  return new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_CLIENT_DOMAIN, options)
}

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`

const getOptions = (container) => {
  const secret = uuid.v4()
  setSecret(secret)
  return {
    container,
    closable: false,
    rememeberLastLogin: false,
    auth: {
      responseType: 'id_token token',
      audience: process.env.AUTH0_AUDIENCE,
      redirectUrl: `${getBaseUrl()}/auth/callback`,
      params: {
        scope: 'openid profile email',
        state: secret
      }
    }
  }
}

export const show = (container) => getLock(getOptions(container)).show()
export const logout = () => getLock().logout({ returnTo: getBaseUrl() })
