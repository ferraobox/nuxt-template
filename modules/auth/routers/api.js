import cookie from 'cookie'
import rejectHit from '../helpers'

export default (authConfig, apis) => {
  return async function getApiRoute(req, res, next) {
    const idToken = cookie.parse(req.headers.cookie)[authConfig.cookieName]
    if (!idToken) {
      return rejectHit(res)
    }

    console.log('* AUTH - MDW', req.originalUrl)
    const ticket = await apis.goauth.getUser(idToken, authConfig)

    if (!ticket) {
      return rejectHit(res)
    }

    //Definition of indentity in request
    req.identity = {
      id: ticket.sub,
      email: ticket.email,
      name: ticket.name,
      image: ticket.picture,
    }
    next()
  }
}
