import bodyParser from 'body-parser'
import userRouter from './routers/user'
import getApis from './apis'

export default function () {
  const appId = this.options.privateRuntimeConfig.algolia.appId
  const apiKey = this.options.privateRuntimeConfig.algolia.key
  const apis = getApis({ appId, apiKey })

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use(bodyParser.urlencoded())
    app.use('/api/user', userRouter(apis))
  })
}
