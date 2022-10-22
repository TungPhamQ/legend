import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dfeccc46 = () => interopDefault(import('..\\pages\\stock-analysis.vue' /* webpackChunkName: "pages/stock-analysis" */))
const _50d8ffc2 = () => interopDefault(import('..\\pages\\tool.vue' /* webpackChunkName: "pages/tool" */))
const _441979da = () => interopDefault(import('..\\pages\\wiki.vue' /* webpackChunkName: "pages/wiki" */))
const _94deb5d0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/stock-analysis",
    component: _dfeccc46,
    name: "stock-analysis"
  }, {
    path: "/tool",
    component: _50d8ffc2,
    name: "tool"
  }, {
    path: "/wiki",
    component: _441979da,
    name: "wiki"
  }, {
    path: "/",
    component: _94deb5d0,
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
