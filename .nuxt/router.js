import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ab96c360 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _d218f316 = () => interopDefault(import('../pages/admin/homes.vue' /* webpackChunkName: "pages/admin/homes" */))
const _59c40cf1 = () => interopDefault(import('../pages/no-access.vue' /* webpackChunkName: "pages/no-access" */))
const _4ba2d977 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _775c04ce = () => interopDefault(import('../pages/home/_id.vue' /* webpackChunkName: "pages/home/_id" */))
const _78c54a53 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _ab96c360,
    name: "admin",
    children: [{
      path: "homes",
      component: _d218f316,
      name: "admin-homes"
    }]
  }, {
    path: "/no-access",
    component: _59c40cf1,
    name: "no-access"
  }, {
    path: "/search",
    component: _4ba2d977,
    name: "search"
  }, {
    path: "/home/:id?",
    component: _775c04ce,
    name: "home-id"
  }, {
    path: "/",
    component: _78c54a53,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
