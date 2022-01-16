export function rejectHit(res) {
  res.statusCode = 401
  res.end()
}
