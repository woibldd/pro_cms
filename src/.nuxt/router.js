import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65e970f7 = () => interopDefault(import('../pages/activity/blindbox/index.vue' /* webpackChunkName: "pages/activity/blindbox/index" */))
const _20d08508 = () => interopDefault(import('../pages/activity/blindbox/detail.vue' /* webpackChunkName: "pages/activity/blindbox/detail" */))
const _6bb9fd1a = () => interopDefault(import('../pages/activity/blindbox/download.vue' /* webpackChunkName: "pages/activity/blindbox/download" */))
const _1b2d1009 = () => interopDefault(import('../pages/activity/blindbox/list.vue' /* webpackChunkName: "pages/activity/blindbox/list" */))
const _74266e07 = () => interopDefault(import('../pages/article/detail/_id.vue' /* webpackChunkName: "pages/article/detail/_id" */))
const _275a9b50 = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))

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
    component: _65e970f7,
    name: "activity-blindbox"
  }, {
    path: "/activity/blindbox/detail",
    component: _20d08508,
    name: "activity-blindbox-detail"
  }, {
    path: "/activity/blindbox/download",
    component: _6bb9fd1a,
    name: "activity-blindbox-download"
  }, {
    path: "/activity/blindbox/list",
    component: _1b2d1009,
    name: "activity-blindbox-list"
  }, {
    path: "/article/detail/:id?",
    component: _74266e07,
    name: "article-detail-id"
  }, {
    path: "/:id?",
    component: _275a9b50,
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
