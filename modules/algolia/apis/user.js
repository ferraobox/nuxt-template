import { getHeaders } from '../helpers'
import fetch from 'node-fetch'
import { unWrap, getErrorResponse } from '../../../utils/fetchUtils'

export default ({ appId, apiKey }) => {
  const headers = getHeaders(appId, apiKey)

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
  }
}
