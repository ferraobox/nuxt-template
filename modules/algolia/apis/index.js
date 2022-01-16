import userApi from './user'
import homesApi from './homes'

export default (agoliaAuth) => {
  return {
    user: userApi(agoliaAuth.appId, agoliaAuth.adminKey),
    home: homesApi(agoliaAuth.appId, agoliaAuth.adminKey),
  }
}
