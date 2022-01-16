import { OAuth2Client } from 'google-auth-library'

export default () => {
  return {
    getUser: async (idToken, authConfig) => {
      const client = new OAuth2Client(authConfig.clientId)
      try {
        const ticket = await client.verifyIdToken({
          idToken,
          audience: authConfig.clientId,
        })
        return ticket.getPayload()
      } catch (error) {
        console.error(error)
      }
    },
  }
}
