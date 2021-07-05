import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _abcb9dfe = () => interopDefault(import('../pages/activity/blindbox/index.vue' /* webpackChunkName: "pages/activity/blindbox/index" */))
const _317efeb2 = () => interopDefault(import('../pages/activity/blindbox/detail.vue' /* webpackChunkName: "pages/activity/blindbox/detail" */))
const _2f3ecd29 = () => interopDefault(import('../pages/activity/blindbox/download.vue' /* webpackChunkName: "pages/activity/blindbox/download" */))
const _cd81b282 = () => interopDefault(import('../pages/activity/blindbox/list.vue' /* webpackChunkName: "pages/activity/blindbox/list" */))
const _000c4fbd = () => interopDefault(import('../pages/article/detail/_id.vue' /* webpackChunkName: "pages/article/detail/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/activity/blindbox",
    component: _abcb9dfe,
    name: "activity-blindbox"
  }, {
    path: "/activity/blindbox/detail",
    component: _317efeb2,
    name: "activity-blindbox-detail"
  }, {
    path: "/activity/blindbox/download",
    component: _2f3ecd29,
    name: "activity-blindbox-download"
  }, {
    path: "/activity/blindbox/list",
    component: _cd81b282,
    name: "activity-blindbox-list"
  }, {
    path: "/article/detail/:id?",
    component: _000c4fbd,
    name: "article-detail-id"
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
