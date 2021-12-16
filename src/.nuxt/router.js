import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _214ac336 = () => interopDefault(import('../pages/activity/airdrop/index.vue' /* webpackChunkName: "pages/activity/airdrop/index" */))
const _85ae8e80 = () => interopDefault(import('../pages/activity/blindbox/index.vue' /* webpackChunkName: "pages/activity/blindbox/index" */))
const _423e24e9 = () => interopDefault(import('../pages/activity/blindboxInvite/index.vue' /* webpackChunkName: "pages/activity/blindboxInvite/index" */))
const _432e757a = () => interopDefault(import('../pages/activity/cbkbexchange/index.vue' /* webpackChunkName: "pages/activity/cbkbexchange/index" */))
const _03bed5fa = () => interopDefault(import('../pages/activity/mining/index.vue' /* webpackChunkName: "pages/activity/mining/index" */))
const _e16d1052 = () => interopDefault(import('../pages/activity/nftLottery/index.vue' /* webpackChunkName: "pages/activity/nftLottery/index" */))
const _26864b16 = () => interopDefault(import('../pages/activity/blindbox/detail/index.vue' /* webpackChunkName: "pages/activity/blindbox/detail/index" */))
const _51b48dec = () => interopDefault(import('../pages/activity/blindbox/download.vue' /* webpackChunkName: "pages/activity/blindbox/download" */))
const _1e254ba8 = () => interopDefault(import('../pages/activity/blindbox/firendList.vue' /* webpackChunkName: "pages/activity/blindbox/firendList" */))
const _271da9c0 = () => interopDefault(import('../pages/activity/blindbox/list.vue' /* webpackChunkName: "pages/activity/blindbox/list" */))
const _a5580482 = () => interopDefault(import('../pages/activity/blindbox/stepDetail.vue' /* webpackChunkName: "pages/activity/blindbox/stepDetail" */))
const _d75b1ebe = () => interopDefault(import('../pages/activity/blindboxInvite/copy.js' /* webpackChunkName: "pages/activity/blindboxInvite/copy" */))
const _c44cf06c = () => interopDefault(import('../pages/activity/blindboxInvite/detail.vue' /* webpackChunkName: "pages/activity/blindboxInvite/detail" */))
const _21c91f7e = () => interopDefault(import('../pages/activity/blindboxInvite/download.vue' /* webpackChunkName: "pages/activity/blindboxInvite/download" */))
const _1e5dd980 = () => interopDefault(import('../pages/activity/blindboxInvite/inviteList.vue' /* webpackChunkName: "pages/activity/blindboxInvite/inviteList" */))
const _62b6ad66 = () => interopDefault(import('../pages/activity/blindboxInvite/rewardList.vue' /* webpackChunkName: "pages/activity/blindboxInvite/rewardList" */))
const _3faca386 = () => interopDefault(import('../pages/activity/blindboxInvite/RuleDetail.vue' /* webpackChunkName: "pages/activity/blindboxInvite/RuleDetail" */))
const _133d3cbc = () => interopDefault(import('../pages/activity/mining/history.vue' /* webpackChunkName: "pages/activity/mining/history" */))
const _723d0c5e = () => interopDefault(import('../pages/activity/mining/inviteRuleDetail.vue' /* webpackChunkName: "pages/activity/mining/inviteRuleDetail" */))
const _3390fe74 = () => interopDefault(import('../pages/activity/mining/miningRule.vue' /* webpackChunkName: "pages/activity/mining/miningRule" */))
const _54d1d0c0 = () => interopDefault(import('../pages/activity/mining/protocol.vue' /* webpackChunkName: "pages/activity/mining/protocol" */))
const _d61615d6 = () => interopDefault(import('../pages/activity/mining/RuleDetail.vue' /* webpackChunkName: "pages/activity/mining/RuleDetail" */))
const _5d08bdb4 = () => interopDefault(import('../pages/activity/blindboxInvite/component/createPoster.vue' /* webpackChunkName: "pages/activity/blindboxInvite/component/createPoster" */))
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
    path: "/activity/airdrop",
    component: _214ac336,
    name: "activity-airdrop"
  }, {
    path: "/activity/blindbox",
    component: _85ae8e80,
    name: "activity-blindbox"
  }, {
    path: "/activity/blindboxInvite",
    component: _423e24e9,
    name: "activity-blindboxInvite"
  }, {
    path: "/activity/cbkbexchange",
    component: _432e757a,
    name: "activity-cbkbexchange"
  }, {
    path: "/activity/mining",
    component: _03bed5fa,
    name: "activity-mining"
  }, {
    path: "/activity/nftLottery",
    component: _e16d1052,
    name: "activity-nftLottery"
  }, {
    path: "/activity/blindbox/detail",
    component: _26864b16,
    name: "activity-blindbox-detail"
  }, {
    path: "/activity/blindbox/download",
    component: _51b48dec,
    name: "activity-blindbox-download"
  }, {
    path: "/activity/blindbox/firendList",
    component: _1e254ba8,
    name: "activity-blindbox-firendList"
  }, {
    path: "/activity/blindbox/list",
    component: _271da9c0,
    name: "activity-blindbox-list"
  }, {
    path: "/activity/blindbox/stepDetail",
    component: _a5580482,
    name: "activity-blindbox-stepDetail"
  }, {
    path: "/activity/blindboxInvite/copy",
    component: _d75b1ebe,
    name: "activity-blindboxInvite-copy"
  }, {
    path: "/activity/blindboxInvite/detail",
    component: _c44cf06c,
    name: "activity-blindboxInvite-detail"
  }, {
    path: "/activity/blindboxInvite/download",
    component: _21c91f7e,
    name: "activity-blindboxInvite-download"
  }, {
    path: "/activity/blindboxInvite/inviteList",
    component: _1e5dd980,
    name: "activity-blindboxInvite-inviteList"
  }, {
    path: "/activity/blindboxInvite/rewardList",
    component: _62b6ad66,
    name: "activity-blindboxInvite-rewardList"
  }, {
    path: "/activity/blindboxInvite/RuleDetail",
    component: _3faca386,
    name: "activity-blindboxInvite-RuleDetail"
  }, {
    path: "/activity/mining/history",
    component: _133d3cbc,
    name: "activity-mining-history"
  }, {
    path: "/activity/mining/inviteRuleDetail",
    component: _723d0c5e,
    name: "activity-mining-inviteRuleDetail"
  }, {
    path: "/activity/mining/miningRule",
    component: _3390fe74,
    name: "activity-mining-miningRule"
  }, {
    path: "/activity/mining/protocol",
    component: _54d1d0c0,
    name: "activity-mining-protocol"
  }, {
    path: "/activity/mining/RuleDetail",
    component: _d61615d6,
    name: "activity-mining-RuleDetail"
  }, {
    path: "/activity/blindboxInvite/component/createPoster",
    component: _5d08bdb4,
    name: "activity-blindboxInvite-component-createPoster"
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
