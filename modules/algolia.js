import fetch from 'node-fetch'
import { unWrap, getErrorResponse } from '../utils/fetchUtils'

export default function () {
  const appId = this.options.privateRuntimeConfig.algolia.appId
  const apiKey = this.options.privateRuntimeConfig.algolia.key

  const headers = {
    'X-Algolia-API-Key': apiKey,
    'X-Algolia-Application-Id': appId,
  }
  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use('/api/user', getUserRoute)
  })

  async function getUserRoute(req, res) {
    const identity = req.identity
    const userData = await getUserById(identity)

    console.log('* AGOLIA - MDW', req.originalUrl)

    if (userData.status == 200) {
      sendJSON(userData.json, res)
      return
    }
    createUser(req.identity)
    sendJSON(makeUserPayload(identity), res)
  }

  async function createUser(identity) {
    try {
      return unWrap(
        await fetch(`https://${appId}-dsn.algolia.net/1/indexes/users/${identity.id}`, {
          headers,
          method: 'PUT',
          body: JSON.stringify(makeUserPayload(identity)),
        })
      )
    } catch (error) {
      return getErrorResponse(error)
    }
  }

  async function getUserById(userId) {
    try {
      return unWrap(
        await fetch(`https://${appId}-dsn.algolia.net/1/indexes/users/${userId}`, {
          headers,
        })
      )
    } catch (error) {
      return getErrorResponse(error)
    }
  }

  function sendJSON(data, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  }

  function makeUserPayload(identity) {
    return {
      name: identity.name,
      email: identity.email,
      image: identity.image,
      homeId: [],
      reviewCount: 0,
      description: '',
      joined: new Date().toISOString(),
    }
  }
}
