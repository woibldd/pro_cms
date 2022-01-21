import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _57e7dee0 = () => interopDefault(import('../pages/activity/airdrop/index.vue' /* webpackChunkName: "pages/activity/airdrop/index" */))
const _664387a5 = () => interopDefault(import('../pages/activity/blindbox/index.vue' /* webpackChunkName: "pages/activity/blindbox/index" */))
const _750d17e4 = () => interopDefault(import('../pages/activity/blindboxInvite/index.vue' /* webpackChunkName: "pages/activity/blindboxInvite/index" */))
const _63f0ccb0 = () => interopDefault(import('../pages/activity/cbkbexchange/index.vue' /* webpackChunkName: "pages/activity/cbkbexchange/index" */))
const _12cbcbc2 = () => interopDefault(import('../pages/activity/mining/index.vue' /* webpackChunkName: "pages/activity/mining/index" */))
const _5cec217c = () => interopDefault(import('../pages/activity/nftLottery/index.vue' /* webpackChunkName: "pages/activity/nftLottery/index" */))
const _790f37c1 = () => interopDefault(import('../pages/activity/noviceBenefits/index.vue' /* webpackChunkName: "pages/activity/noviceBenefits/index" */))
const _0ab4e091 = () => interopDefault(import('../pages/activity/blindbox/detail/index.vue' /* webpackChunkName: "pages/activity/blindbox/detail/index" */))
const _844f77f6 = () => interopDefault(import('../pages/activity/blindbox/download.vue' /* webpackChunkName: "pages/activity/blindbox/download" */))
const _15addb32 = () => interopDefault(import('../pages/activity/blindbox/firendList.vue' /* webpackChunkName: "pages/activity/blindbox/firendList" */))
const _54fe6b9b = () => interopDefault(import('../pages/activity/blindbox/list.vue' /* webpackChunkName: "pages/activity/blindbox/list" */))
const _9ce0940c = () => interopDefault(import('../pages/activity/blindbox/stepDetail.vue' /* webpackChunkName: "pages/activity/blindbox/stepDetail" */))
const _f81d75f4 = () => interopDefault(import('../pages/activity/blindboxInvite/copy.js' /* webpackChunkName: "pages/activity/blindboxInvite/copy" */))
const _fbefc576 = () => interopDefault(import('../pages/activity/blindboxInvite/detail.vue' /* webpackChunkName: "pages/activity/blindboxInvite/detail" */))
const _fc0ada08 = () => interopDefault(import('../pages/activity/blindboxInvite/download.vue' /* webpackChunkName: "pages/activity/blindboxInvite/download" */))
const _4872733b = () => interopDefault(import('../pages/activity/blindboxInvite/inviteList.vue' /* webpackChunkName: "pages/activity/blindboxInvite/inviteList" */))
const _8b4fe53e = () => interopDefault(import('../pages/activity/blindboxInvite/rewardList.vue' /* webpackChunkName: "pages/activity/blindboxInvite/rewardList" */))
const _d163f8fe = () => interopDefault(import('../pages/activity/blindboxInvite/RuleDetail.vue' /* webpackChunkName: "pages/activity/blindboxInvite/RuleDetail" */))
const _874fe8be = () => interopDefault(import('../pages/activity/mining/history.vue' /* webpackChunkName: "pages/activity/mining/history" */))
const _051c2f19 = () => interopDefault(import('../pages/activity/mining/inviteRuleDetail.vue' /* webpackChunkName: "pages/activity/mining/inviteRuleDetail" */))
const _1a43896f = () => interopDefault(import('../pages/activity/mining/miningRule.vue' /* webpackChunkName: "pages/activity/mining/miningRule" */))
const _4fd6255b = () => interopDefault(import('../pages/activity/mining/protocol.vue' /* webpackChunkName: "pages/activity/mining/protocol" */))
const _7ba78010 = () => interopDefault(import('../pages/activity/mining/RuleDetail.vue' /* webpackChunkName: "pages/activity/mining/RuleDetail" */))
const _b520543a = () => interopDefault(import('../pages/activity/noviceBenefits/drawluckly.vue' /* webpackChunkName: "pages/activity/noviceBenefits/drawluckly" */))
const _54a4cf92 = () => interopDefault(import('../pages/activity/noviceBenefits/inviteRuleDetail.vue' /* webpackChunkName: "pages/activity/noviceBenefits/inviteRuleDetail" */))
const _57b9f12e = () => interopDefault(import('../pages/activity/noviceBenefits/lotteryresults.vue' /* webpackChunkName: "pages/activity/noviceBenefits/lotteryresults" */))
const _75ea05a2 = () => interopDefault(import('../pages/activity/blindboxInvite/component/createPoster.vue' /* webpackChunkName: "pages/activity/blindboxInvite/component/createPoster" */))
const _2873d339 = () => interopDefault(import('../pages/activity/blindbox/detail/_id.vue' /* webpackChunkName: "pages/activity/blindbox/detail/_id" */))
const _10086299 = () => interopDefault(import('../pages/article/detail/_id.vue' /* webpackChunkName: "pages/article/detail/_id" */))
const _49cc6c06 = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))

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
    component: _57e7dee0,
    name: "activity-airdrop"
  }, {
    path: "/activity/blindbox",
    component: _664387a5,
    name: "activity-blindbox"
  }, {
    path: "/activity/blindboxInvite",
    component: _750d17e4,
    name: "activity-blindboxInvite"
  }, {
    path: "/activity/cbkbexchange",
    component: _63f0ccb0,
    name: "activity-cbkbexchange"
  }, {
    path: "/activity/mining",
    component: _12cbcbc2,
    name: "activity-mining"
  }, {
    path: "/activity/nftLottery",
    component: _5cec217c,
    name: "activity-nftLottery"
  }, {
    path: "/activity/noviceBenefits",
    component: _790f37c1,
    name: "activity-noviceBenefits"
  }, {
    path: "/activity/blindbox/detail",
    component: _0ab4e091,
    name: "activity-blindbox-detail"
  }, {
    path: "/activity/blindbox/download",
    component: _844f77f6,
    name: "activity-blindbox-download"
  }, {
    path: "/activity/blindbox/firendList",
    component: _15addb32,
    name: "activity-blindbox-firendList"
  }, {
    path: "/activity/blindbox/list",
    component: _54fe6b9b,
    name: "activity-blindbox-list"
  }, {
    path: "/activity/blindbox/stepDetail",
    component: _9ce0940c,
    name: "activity-blindbox-stepDetail"
  }, {
    path: "/activity/blindboxInvite/copy",
    component: _f81d75f4,
    name: "activity-blindboxInvite-copy"
  }, {
    path: "/activity/blindboxInvite/detail",
    component: _fbefc576,
    name: "activity-blindboxInvite-detail"
  }, {
    path: "/activity/blindboxInvite/download",
    component: _fc0ada08,
    name: "activity-blindboxInvite-download"
  }, {
    path: "/activity/blindboxInvite/inviteList",
    component: _4872733b,
    name: "activity-blindboxInvite-inviteList"
  }, {
    path: "/activity/blindboxInvite/rewardList",
    component: _8b4fe53e,
    name: "activity-blindboxInvite-rewardList"
  }, {
    path: "/activity/blindboxInvite/RuleDetail",
    component: _d163f8fe,
    name: "activity-blindboxInvite-RuleDetail"
  }, {
    path: "/activity/mining/history",
    component: _874fe8be,
    name: "activity-mining-history"
  }, {
    path: "/activity/mining/inviteRuleDetail",
    component: _051c2f19,
    name: "activity-mining-inviteRuleDetail"
  }, {
    path: "/activity/mining/miningRule",
    component: _1a43896f,
    name: "activity-mining-miningRule"
  }, {
    path: "/activity/mining/protocol",
    component: _4fd6255b,
    name: "activity-mining-protocol"
  }, {
    path: "/activity/mining/RuleDetail",
    component: _7ba78010,
    name: "activity-mining-RuleDetail"
  }, {
    path: "/activity/noviceBenefits/drawluckly",
    component: _b520543a,
    name: "activity-noviceBenefits-drawluckly"
  }, {
    path: "/activity/noviceBenefits/inviteRuleDetail",
    component: _54a4cf92,
    name: "activity-noviceBenefits-inviteRuleDetail"
  }, {
    path: "/activity/noviceBenefits/lotteryresults",
    component: _57b9f12e,
    name: "activity-noviceBenefits-lotteryresults"
  }, {
    path: "/activity/blindboxInvite/component/createPoster",
    component: _75ea05a2,
    name: "activity-blindboxInvite-component-createPoster"
  }, {
    path: "/activity/blindbox/detail/:id",
    component: _2873d339,
    name: "activity-blindbox-detail-id"
  }, {
    path: "/article/detail/:id?",
    component: _10086299,
    name: "article-detail-id"
  }, {
    path: "/:id?",
    component: _49cc6c06,
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
