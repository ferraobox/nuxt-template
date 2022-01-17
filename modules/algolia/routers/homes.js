import { rejectHitBadRequest, hasBadBody, sendJSON } from '../../helpers'
import { v4 as uuidv4 } from 'uuid'

export default (apis) => {
  return async (req, res) => {
    if (req.method == 'GET' && req.url == '/user/') {
      return await getHomesByUser(req.identity.id, res)
    }

    if (req.method == 'POST') {
      if (hasBadBody(req)) {
        return rejectHitBadRequest(res)
      }
      await createHome(req.identity, req.body, res)
    }

    if (req.method == 'DELETE') {
      const homeId = req.url.replace(/\//g, '')
      return await deleteHome(req.identity, homeId, res)
    }
    rejectHitBadRequest(res)
  }

  async function getHomesByUser(userId, res) {
    const payload = (await apis.home.getByUserId(userId)).json
    sendJSON(payload, res)
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
      res.end()
      return
    }

    await apis.user.assignHome(identity, homeId)
    sendJSON({ homeId }, res)
  }

  async function deleteHome(identity, homeId, res) {
    await Promise.all([apis.home.delete(homeId), apis.user.removeHome(identity, homeId)])
    sendJSON({}, res)
  }
}
