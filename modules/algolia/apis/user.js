import { getHeaders } from '../helpers'
import fetch from 'node-fetch'
import { unWrap, getErrorResponse } from '../../../utils/fetchUtils'

export default (appId, adminKey) => {
  const headers = getHeaders(appId, adminKey)

  return {
    create: async (identity, payload) => {
      try {
        return unWrap(
          await fetch(`https://${appId}-dsn.algolia.net/1/indexes/users/${identity.id}`, {
            headers,
            method: 'PUT',
            body: JSON.stringify(payload),
          })
        )
      } catch (error) {
        return getErrorResponse(error)
      }
    },
    getById: async (userId) => {
      try {
        return unWrap(
          await fetch(`https://${appId}-dsn.algolia.net/1/indexes/users/${userId}`, {
            headers,
          })
        )
      } catch (error) {
        return getErrorResponse(error)
      }
    },
    assignHome: async function (identity, homeId) {
      const payload = (await this.getById(identity.id)).json
      payload.homeId.push(homeId)
      this.create(identity, payload)
    },
    removeHome: async function (identity, homeId) {
      const payload = (await this.getById(identity.id)).json
      const homes = payload.homeId.filter((id) => id != homeId)
      payload.homeId = homes
      this.create(identity, payload)
    },
  }
}
