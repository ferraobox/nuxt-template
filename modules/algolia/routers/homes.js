import { rejectHitBadRequest, hasBadBody, sendJSON } from '../helpers'
import { v4 as uuidv4 } from 'uuid'

export default (apis) => {
  return async (req, res) => {
    if (req.method == 'POST') {
      if (hasBadBody(req)) {
        return rejectHitBadRequest(res)
      }
      await createHome(req.identity, req.body, res)
    }
    rejectHitBadRequest(res)
  }

  async function createHome(identity, body, res) {
    const homeId = uuidv4()
    const payload = {
      ...body,
      reviewCount: 0,
      reviewValue: 0,
      userId: identity.id,
    }

    const response = await apis.home.create(homeId, payload)

    if (!response.ok == 200) {
      res.statusCode = 500
      res.send()
      return
    }
    sendJSON({}, res)
  }
}
