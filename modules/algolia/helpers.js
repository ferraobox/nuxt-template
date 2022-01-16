export function getHeaders(apiKey, appId) {
  return {
    'X-Algolia-API-Key': apiKey,
    'X-Algolia-Application-Id': appId,
  }
}

export function sendJSON(data, res) {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}
