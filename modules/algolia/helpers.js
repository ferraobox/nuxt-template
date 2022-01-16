export function getHeaders(appId, apiKey) {
  return {
    'X-Algolia-API-Key': apiKey,
    'X-Algolia-Application-Id': appId,
  }
}

export function sendJSON(data, res) {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}

export function rejectHitBadRequest(res) {
  res.statusCode = 400
  res.end()
}

export function hasBadBody(req) {
  return !req.body || Object.keys(req.body).length === 0
}
