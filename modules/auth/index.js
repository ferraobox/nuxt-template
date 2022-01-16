import apiRouter from './routers/api'
import getApis from './apis'

export default function () {
  const authConfig = this.options.publicRuntimeConfig.auth
  const apis = getApis()

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use('/api', apiRouter(authConfig, apis))
  })

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use('/admin', (req, res, next) => {
      res.spa = true
      next()
    })
  })
}
