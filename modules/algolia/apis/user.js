import { getAgoliaHeaders } from '../../helpers'
import fetch from 'node-fetch'
import { unWrap, getErrorResponse } from '../../../utils/fetchUtils'

export default (appId, adminKey) => {
  const headers = getAgoliaHeaders(appId, adminKey)

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

    bookHome: async (userId, homeId, { start, end }) => {
      try {
        return unWrap(
          await fetch(`https://${appId}-dsn.algolia.net/1/indexes/bookings/${userId}`, {
            headers,
            method: 'POST',
            body: JSON.stringify({
              userId,
              homeId,
              start,
              end,
            }),
          })
        )
      } catch (error) {
        return getErrorResponse(error)
      }
    },
  }
}
