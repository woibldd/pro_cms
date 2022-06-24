import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _15b9adf7 = () => interopDefault(import('../pages/mint_nft_token/index.vue' /* webpackChunkName: "pages/mint_nft_token/index" */))
const _71501f57 = () => interopDefault(import('../pages/activity/airdrop/index.vue' /* webpackChunkName: "pages/activity/airdrop/index" */))
const _79e3560e = () => interopDefault(import('../pages/activity/blindbox/index.vue' /* webpackChunkName: "pages/activity/blindbox/index" */))
const _5bf50fb7 = () => interopDefault(import('../pages/activity/blindboxInvite/index.vue' /* webpackChunkName: "pages/activity/blindboxInvite/index" */))
const _56d80b91 = () => interopDefault(import('../pages/activity/cbkbexchange/index.vue' /* webpackChunkName: "pages/activity/cbkbexchange/index" */))
const _397c6ec8 = () => interopDefault(import('../pages/activity/mining/index.vue' /* webpackChunkName: "pages/activity/mining/index" */))
const _07d1f9a5 = () => interopDefault(import('../pages/activity/nftLottery/index.vue' /* webpackChunkName: "pages/activity/nftLottery/index" */))
const _0f8ad36a = () => interopDefault(import('../pages/activity/noviceBenefits/index.vue' /* webpackChunkName: "pages/activity/noviceBenefits/index" */))
const _5dad9055 = () => interopDefault(import('../pages/activity/staking/index.vue' /* webpackChunkName: "pages/activity/staking/index" */))
const _83b9a182 = () => interopDefault(import('../pages/activity/trading/index.vue' /* webpackChunkName: "pages/activity/trading/index" */))
const _193055f4 = () => interopDefault(import('../pages/mint_nft_token/BK.vue' /* webpackChunkName: "pages/mint_nft_token/BK" */))
const _43acba08 = () => interopDefault(import('../pages/activity/blindbox/detail/index.vue' /* webpackChunkName: "pages/activity/blindbox/detail/index" */))
const _6fad70fc = () => interopDefault(import('../pages/activity/blindbox/download.vue' /* webpackChunkName: "pages/activity/blindbox/download" */))
const _f33244c4 = () => interopDefault(import('../pages/activity/blindbox/firendList.vue' /* webpackChunkName: "pages/activity/blindbox/firendList" */))
const _6e66ac12 = () => interopDefault(import('../pages/activity/blindbox/list.vue' /* webpackChunkName: "pages/activity/blindbox/list" */))
const _42cd8131 = () => interopDefault(import('../pages/activity/blindbox/stepDetail.vue' /* webpackChunkName: "pages/activity/blindbox/stepDetail" */))
const _0cc1b6ef = () => interopDefault(import('../pages/activity/blindboxInvite/copy.js' /* webpackChunkName: "pages/activity/blindboxInvite/copy" */))
const _8a001288 = () => interopDefault(import('../pages/activity/blindboxInvite/detail.vue' /* webpackChunkName: "pages/activity/blindboxInvite/detail" */))
const _5c61eab3 = () => interopDefault(import('../pages/activity/blindboxInvite/download.vue' /* webpackChunkName: "pages/activity/blindboxInvite/download" */))
const _2662b932 = () => interopDefault(import('../pages/activity/blindboxInvite/inviteList.vue' /* webpackChunkName: "pages/activity/blindboxInvite/inviteList" */))
const _cf6f5950 = () => interopDefault(import('../pages/activity/blindboxInvite/rewardList.vue' /* webpackChunkName: "pages/activity/blindboxInvite/rewardList" */))
const _753e4978 = () => interopDefault(import('../pages/activity/blindboxInvite/RuleDetail.vue' /* webpackChunkName: "pages/activity/blindboxInvite/RuleDetail" */))
const _60104bec = () => interopDefault(import('../pages/activity/mining/history.vue' /* webpackChunkName: "pages/activity/mining/history" */))
const _40f8f260 = () => interopDefault(import('../pages/activity/mining/inviteRuleDetail.vue' /* webpackChunkName: "pages/activity/mining/inviteRuleDetail" */))
const _67ce9334 = () => interopDefault(import('../pages/activity/mining/miningRule.vue' /* webpackChunkName: "pages/activity/mining/miningRule" */))
const _9f9fb7dc = () => interopDefault(import('../pages/activity/mining/protocol.vue' /* webpackChunkName: "pages/activity/mining/protocol" */))
const _2d7cad07 = () => interopDefault(import('../pages/activity/mining/RuleDetail.vue' /* webpackChunkName: "pages/activity/mining/RuleDetail" */))
const _f93fc84c = () => interopDefault(import('../pages/activity/noviceBenefits/drawluckly.vue' /* webpackChunkName: "pages/activity/noviceBenefits/drawluckly" */))
const _d08d6e24 = () => interopDefault(import('../pages/activity/noviceBenefits/inviteRuleDetail.vue' /* webpackChunkName: "pages/activity/noviceBenefits/inviteRuleDetail" */))
const _d0cf38b6 = () => interopDefault(import('../pages/activity/noviceBenefits/lotteryresults.vue' /* webpackChunkName: "pages/activity/noviceBenefits/lotteryresults" */))
const _f997b0c0 = () => interopDefault(import('../pages/activity/staking/addPool.vue' /* webpackChunkName: "pages/activity/staking/addPool" */))
const _6f6f31f5 = () => interopDefault(import('../pages/activity/staking/myPool.vue' /* webpackChunkName: "pages/activity/staking/myPool" */))
const _619f7b65 = () => interopDefault(import('../pages/activity/staking/protocol.vue' /* webpackChunkName: "pages/activity/staking/protocol" */))
const _3599b56e = () => interopDefault(import('../pages/activity/staking/wallet.js' /* webpackChunkName: "pages/activity/staking/wallet" */))
const _741f4e7e = () => interopDefault(import('../pages/activity/trading/history.vue' /* webpackChunkName: "pages/activity/trading/history" */))
const _79477c3b = () => interopDefault(import('../pages/activity/trading/protocol.vue' /* webpackChunkName: "pages/activity/trading/protocol" */))
const _98d4862c = () => interopDefault(import('../pages/activity/trading/tradingRule.vue' /* webpackChunkName: "pages/activity/trading/tradingRule" */))
const _a7b1eeb4 = () => interopDefault(import('../pages/activity/blindboxInvite/component/createPoster.vue' /* webpackChunkName: "pages/activity/blindboxInvite/component/createPoster" */))
const _8c9cc320 = () => interopDefault(import('../pages/activity/blindbox/detail/_id.vue' /* webpackChunkName: "pages/activity/blindbox/detail/_id" */))
const _7ecd12e0 = () => interopDefault(import('../pages/article/detail/_id.vue' /* webpackChunkName: "pages/article/detail/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/mint_nft_token",
    component: _15b9adf7,
    name: "mint_nft_token"
  }, {
    path: "/activity/airdrop",
    component: _71501f57,
    name: "activity-airdrop"
  }, {
    path: "/activity/blindbox",
    component: _79e3560e,
    name: "activity-blindbox"
  }, {
    path: "/activity/blindboxInvite",
    component: _5bf50fb7,
    name: "activity-blindboxInvite"
  }, {
    path: "/activity/cbkbexchange",
    component: _56d80b91,
    name: "activity-cbkbexchange"
  }, {
    path: "/activity/mining",
    component: _397c6ec8,
    name: "activity-mining"
  }, {
    path: "/activity/nftLottery",
    component: _07d1f9a5,
    name: "activity-nftLottery"
  }, {
    path: "/activity/noviceBenefits",
    component: _0f8ad36a,
    name: "activity-noviceBenefits"
  }, {
    path: "/activity/staking",
    component: _5dad9055,
    name: "activity-staking"
  }, {
    path: "/activity/trading",
    component: _83b9a182,
    name: "activity-trading"
  }, {
    path: "/mint_nft_token/BK",
    component: _193055f4,
    name: "mint_nft_token-BK"
  }, {
    path: "/activity/blindbox/detail",
    component: _43acba08,
    name: "activity-blindbox-detail"
  }, {
    path: "/activity/blindbox/download",
    component: _6fad70fc,
    name: "activity-blindbox-download"
  }, {
    path: "/activity/blindbox/firendList",
    component: _f33244c4,
    name: "activity-blindbox-firendList"
  }, {
    path: "/activity/blindbox/list",
    component: _6e66ac12,
    name: "activity-blindbox-list"
  }, {
    path: "/activity/blindbox/stepDetail",
    component: _42cd8131,
    name: "activity-blindbox-stepDetail"
  }, {
    path: "/activity/blindboxInvite/copy",
    component: _0cc1b6ef,
    name: "activity-blindboxInvite-copy"
  }, {
    path: "/activity/blindboxInvite/detail",
    component: _8a001288,
    name: "activity-blindboxInvite-detail"
  }, {
    path: "/activity/blindboxInvite/download",
    component: _5c61eab3,
    name: "activity-blindboxInvite-download"
  }, {
    path: "/activity/blindboxInvite/inviteList",
    component: _2662b932,
    name: "activity-blindboxInvite-inviteList"
  }, {
    path: "/activity/blindboxInvite/rewardList",
    component: _cf6f5950,
    name: "activity-blindboxInvite-rewardList"
  }, {
    path: "/activity/blindboxInvite/RuleDetail",
    component: _753e4978,
    name: "activity-blindboxInvite-RuleDetail"
  }, {
    path: "/activity/mining/history",
    component: _60104bec,
    name: "activity-mining-history"
  }, {
    path: "/activity/mining/inviteRuleDetail",
    component: _40f8f260,
    name: "activity-mining-inviteRuleDetail"
  }, {
    path: "/activity/mining/miningRule",
    component: _67ce9334,
    name: "activity-mining-miningRule"
  }, {
    path: "/activity/mining/protocol",
    component: _9f9fb7dc,
    name: "activity-mining-protocol"
  }, {
    path: "/activity/mining/RuleDetail",
    component: _2d7cad07,
    name: "activity-mining-RuleDetail"
  }, {
    path: "/activity/noviceBenefits/drawluckly",
    component: _f93fc84c,
    name: "activity-noviceBenefits-drawluckly"
  }, {
    path: "/activity/noviceBenefits/inviteRuleDetail",
    component: _d08d6e24,
    name: "activity-noviceBenefits-inviteRuleDetail"
  }, {
    path: "/activity/noviceBenefits/lotteryresults",
    component: _d0cf38b6,
    name: "activity-noviceBenefits-lotteryresults"
  }, {
    path: "/activity/staking/addPool",
    component: _f997b0c0,
    name: "activity-staking-addPool"
  }, {
    path: "/activity/staking/myPool",
    component: _6f6f31f5,
    name: "activity-staking-myPool"
  }, {
    path: "/activity/staking/protocol",
    component: _619f7b65,
    name: "activity-staking-protocol"
  }, {
    path: "/activity/staking/wallet",
    component: _3599b56e,
    name: "activity-staking-wallet"
  }, {
    path: "/activity/trading/history",
    component: _741f4e7e,
    name: "activity-trading-history"
  }, {
    path: "/activity/trading/protocol",
    component: _79477c3b,
    name: "activity-trading-protocol"
  }, {
    path: "/activity/trading/tradingRule",
    component: _98d4862c,
    name: "activity-trading-tradingRule"
  }, {
    path: "/activity/blindboxInvite/component/createPoster",
    component: _a7b1eeb4,
    name: "activity-blindboxInvite-component-createPoster"
  }, {
    path: "/activity/blindbox/detail/:id",
    component: _8c9cc320,
    name: "activity-blindbox-detail-id"
  }, {
    path: "/article/detail/:id?",
    component: _7ecd12e0,
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
