import { unWrap, getErrorResponse } from '../utils/fetchUtils'

export default function ({ $config }, inject) {
  const appId = $config.algolia.appId
  const apiKey = $config.algolia.key
  const headers = {
    'X-Algolia-API-Key': apiKey,
    'X-Algolia-Application-Id': appId,
  }

  inject('dataApi', {
    getHomes,
    getHomeByHomeId,
    getHomesByLocation,
    getUserByHomeId,
    getReviewsByHomeId,
  })

  async function getHomes() {
    try {
      return unWrap(
        await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes`, {
          headers,
        })
      )
    } catch (error) {
      return getErrorResponse(error)
    }
  }

  async function getHomeByHomeId(homeId) {
    try {
      return unWrap(
        await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
          headers,
        })
      )
    } catch (error) {
      return getErrorResponse(error)
    }
  }

  async function getUserByHomeId(homeId) {
    try {
      return unWrap(
        await fetch(`https://${appId}-dsn.algolia.net/1/indexes/users/query`, {
          headers,
          method: 'POST',
          body: JSON.stringify({
            filters: `homeId:${homeId}`,
            attributesToHighlight: [],
          }),
        })
      )
    } catch (error) {
      return getErrorResponse(error)
    }
  }

  async function getHomesByLocation(lat, lng, radiusInMeters = 1500) {
    try {
      return unWrap(
        await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/query`, {
          headers,
          method: 'POST',
          body: JSON.stringify({
            //https://www.algolia.com/doc/api-reference/api-parameters/aroundLatLng/
            //Search for entries around a central geolocation, enabling a geo search within a circular area.
            aroundLatLng: `${lat},${lng}`,
            aroundRadius: radiusInMeters,
            hitsPerPage: 10,
            attributesToHighlight: [],
          }),
        })
      )
    } catch (error) {
      return getErrorResponse(error)
    }
  }

  async function getReviewsByHomeId(homeId) {
    try {
      return unWrap(
        await fetch(`https://${appId}-dsn.algolia.net/1/indexes/reviews/query`, {
          headers,
          method: 'POST',
          body: JSON.stringify({
            filters: `homeId:${homeId}`,
            hitsPerPage: 4,
            attributesToHighlight: [],
          }),
        })
      )
    } catch (error) {
      return getErrorResponse(error)
    }
  }
}
