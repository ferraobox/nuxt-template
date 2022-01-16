import bodyParser from 'body-parser'
import userRouter from './routers/user'
import homesRouter from './routers/homes'
import getApis from './apis'

export default function () {
  const agoliaAuth = this.options.privateRuntimeConfig.algolia
  const apis = getApis(agoliaAuth)

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use(bodyParser.json())
    app.use('/api/user', userRouter(apis))
    app.use('/api/homes', homesRouter(apis))
  })
}
