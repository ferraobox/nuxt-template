import { getHeaders } from '../helpers'
import fetch from 'node-fetch'
import { unWrap, getErrorResponse } from '../../../utils/fetchUtils'

export default (appId, adminKey) => {
  const headers = getHeaders(appId, adminKey)

  return {
    create: async (homeId, payload) => {
      try {
        return unWrap(
          await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
            headers,
            method: 'PUT',
            body: JSON.stringify(payload),
          })
        )
      } catch (error) {
        return getErrorResponse(error)
      }
    },
  }
}
