import userApi from './user'

export default ({ appId, apiKey }) => {
  return {
    user: userApi({ appId, apiKey }),
  }
}
