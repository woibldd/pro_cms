import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fb69fa08 = () => interopDefault(import('../pages/mining/index.vue' /* webpackChunkName: "pages/mining/index" */))
const _214ac336 = () => interopDefault(import('../pages/activity/airdrop/index.vue' /* webpackChunkName: "pages/activity/airdrop/index" */))
const _85ae8e80 = () => interopDefault(import('../pages/activity/blindbox/index.vue' /* webpackChunkName: "pages/activity/blindbox/index" */))
const _432e757a = () => interopDefault(import('../pages/activity/cbkbexchange/index.vue' /* webpackChunkName: "pages/activity/cbkbexchange/index" */))
const _26864b16 = () => interopDefault(import('../pages/activity/blindbox/detail/index.vue' /* webpackChunkName: "pages/activity/blindbox/detail/index" */))
const _51b48dec = () => interopDefault(import('../pages/activity/blindbox/download.vue' /* webpackChunkName: "pages/activity/blindbox/download" */))
const _271da9c0 = () => interopDefault(import('../pages/activity/blindbox/list.vue' /* webpackChunkName: "pages/activity/blindbox/list" */))
const _24381afe = () => interopDefault(import('../pages/activity/blindbox/detail/_id.vue' /* webpackChunkName: "pages/activity/blindbox/detail/_id" */))
const _262ca6c4 = () => interopDefault(import('../pages/article/detail/_id.vue' /* webpackChunkName: "pages/article/detail/_id" */))
const _18d2f8a1 = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/mining",
    component: _fb69fa08,
    name: "mining"
  }, {
    path: "/activity/airdrop",
    component: _214ac336,
    name: "activity-airdrop"
  }, {
    path: "/activity/blindbox",
    component: _85ae8e80,
    name: "activity-blindbox"
  }, {
    path: "/activity/cbkbexchange",
    component: _432e757a,
    name: "activity-cbkbexchange"
  }, {
    path: "/activity/blindbox/detail",
    component: _26864b16,
    name: "activity-blindbox-detail"
  }, {
    path: "/activity/blindbox/download",
    component: _51b48dec,
    name: "activity-blindbox-download"
  }, {
    path: "/activity/blindbox/list",
    component: _271da9c0,
    name: "activity-blindbox-list"
  }, {
    path: "/activity/blindbox/detail/:id",
    component: _24381afe,
    name: "activity-blindbox-detail-id"
  }, {
    path: "/article/detail/:id?",
    component: _262ca6c4,
    name: "article-detail-id"
  }, {
    path: "/:id?",
    component: _18d2f8a1,
    name: "id"
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
