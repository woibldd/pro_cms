import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _19e6a3ae = () => interopDefault(import('../pages/mint_nft_token/index.vue' /* webpackChunkName: "pages/mint_nft_token/index" */))
const _3a3b8413 = () => interopDefault(import('../pages/no.vue' /* webpackChunkName: "pages/no" */))
const _1e16834e = () => interopDefault(import('../pages/activity/airdrop/index.vue' /* webpackChunkName: "pages/activity/airdrop/index" */))
const _65e970f7 = () => interopDefault(import('../pages/activity/blindbox/index.vue' /* webpackChunkName: "pages/activity/blindbox/index" */))
const _330b97e0 = () => interopDefault(import('../pages/activity/blindboxInvite/index.vue' /* webpackChunkName: "pages/activity/blindboxInvite/index" */))
const _4b1489fa = () => interopDefault(import('../pages/activity/cbkbexchange/index.vue' /* webpackChunkName: "pages/activity/cbkbexchange/index" */))
const _8a23a01e = () => interopDefault(import('../pages/activity/mining/index.vue' /* webpackChunkName: "pages/activity/mining/index" */))
const _0abcfe4e = () => interopDefault(import('../pages/activity/nftLottery/index.vue' /* webpackChunkName: "pages/activity/nftLottery/index" */))
const _32bd48da = () => interopDefault(import('../pages/activity/noviceBenefits/index.vue' /* webpackChunkName: "pages/activity/noviceBenefits/index" */))
const _0a73f44c = () => interopDefault(import('../pages/activity/staking/index.vue' /* webpackChunkName: "pages/activity/staking/index" */))
const _6ae99336 = () => interopDefault(import('../pages/activity/trading/index.vue' /* webpackChunkName: "pages/activity/trading/index" */))
const _1efb139d = () => interopDefault(import('../pages/mint_nft_token/BK.vue' /* webpackChunkName: "pages/mint_nft_token/BK" */))
const _4f6736ff = () => interopDefault(import('../pages/activity/blindbox/detail/index.vue' /* webpackChunkName: "pages/activity/blindbox/detail/index" */))
const _6bb9fd1a = () => interopDefault(import('../pages/activity/blindbox/download.vue' /* webpackChunkName: "pages/activity/blindbox/download" */))
const _19ba2c55 = () => interopDefault(import('../pages/activity/blindbox/firendList.vue' /* webpackChunkName: "pages/activity/blindbox/firendList" */))
const _1b2d1009 = () => interopDefault(import('../pages/activity/blindbox/list.vue' /* webpackChunkName: "pages/activity/blindbox/list" */))
const _53be6030 = () => interopDefault(import('../pages/activity/blindbox/stepDetail.vue' /* webpackChunkName: "pages/activity/blindbox/stepDetail" */))
const _00fe3558 = () => interopDefault(import('../pages/activity/blindboxInvite/copy.js' /* webpackChunkName: "pages/activity/blindboxInvite/copy" */))
const _728b189a = () => interopDefault(import('../pages/activity/blindboxInvite/detail.vue' /* webpackChunkName: "pages/activity/blindboxInvite/detail" */))
const _637105ea = () => interopDefault(import('../pages/activity/blindboxInvite/download.vue' /* webpackChunkName: "pages/activity/blindboxInvite/download" */))
const _b3d03aae = () => interopDefault(import('../pages/activity/blindboxInvite/inviteList.vue' /* webpackChunkName: "pages/activity/blindboxInvite/inviteList" */))
const _17fd7ccf = () => interopDefault(import('../pages/activity/blindboxInvite/rewardList.vue' /* webpackChunkName: "pages/activity/blindboxInvite/rewardList" */))
const _16191a22 = () => interopDefault(import('../pages/activity/blindboxInvite/RuleDetail.vue' /* webpackChunkName: "pages/activity/blindboxInvite/RuleDetail" */))
const _8804161a = () => interopDefault(import('../pages/activity/mining/history.vue' /* webpackChunkName: "pages/activity/mining/history" */))
const _32dabbf2 = () => interopDefault(import('../pages/activity/mining/inviteRuleDetail.vue' /* webpackChunkName: "pages/activity/mining/inviteRuleDetail" */))
const _268e46dd = () => interopDefault(import('../pages/activity/mining/miningRule.vue' /* webpackChunkName: "pages/activity/mining/miningRule" */))
const _44ed6649 = () => interopDefault(import('../pages/activity/mining/protocol.vue' /* webpackChunkName: "pages/activity/mining/protocol" */))
const _f01b8504 = () => interopDefault(import('../pages/activity/mining/RuleDetail.vue' /* webpackChunkName: "pages/activity/mining/RuleDetail" */))
const _03154551 = () => interopDefault(import('../pages/activity/noviceBenefits/drawluckly.vue' /* webpackChunkName: "pages/activity/noviceBenefits/drawluckly" */))
const _32313d25 = () => interopDefault(import('../pages/activity/noviceBenefits/inviteRuleDetail.vue' /* webpackChunkName: "pages/activity/noviceBenefits/inviteRuleDetail" */))
const _7d1df99c = () => interopDefault(import('../pages/activity/noviceBenefits/lotteryresults.vue' /* webpackChunkName: "pages/activity/noviceBenefits/lotteryresults" */))
const _17f169d7 = () => interopDefault(import('../pages/activity/staking/addPool.vue' /* webpackChunkName: "pages/activity/staking/addPool" */))
const _5b754cde = () => interopDefault(import('../pages/activity/staking/myPool.vue' /* webpackChunkName: "pages/activity/staking/myPool" */))
const _648a800e = () => interopDefault(import('../pages/activity/staking/protocol.vue' /* webpackChunkName: "pages/activity/staking/protocol" */))
const _dc0ced80 = () => interopDefault(import('../pages/activity/staking/wallet.js' /* webpackChunkName: "pages/activity/staking/wallet" */))
const _5aad9af8 = () => interopDefault(import('../pages/activity/trading/history.vue' /* webpackChunkName: "pages/activity/trading/history" */))
const _7c3280e4 = () => interopDefault(import('../pages/activity/trading/protocol.vue' /* webpackChunkName: "pages/activity/trading/protocol" */))
const _46e90ba1 = () => interopDefault(import('../pages/activity/trading/tradingRule.vue' /* webpackChunkName: "pages/activity/trading/tradingRule" */))
const _1f4eb79d = () => interopDefault(import('../pages/activity/blindboxInvite/component/createPoster.vue' /* webpackChunkName: "pages/activity/blindboxInvite/component/createPoster" */))
const _4d04ed27 = () => interopDefault(import('../pages/activity/blindbox/detail/_id.vue' /* webpackChunkName: "pages/activity/blindbox/detail/_id" */))
const _74266e07 = () => interopDefault(import('../pages/article/detail/_id.vue' /* webpackChunkName: "pages/article/detail/_id" */))

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
    component: _19e6a3ae,
    name: "mint_nft_token"
  }, {
    path: "/no",
    component: _3a3b8413,
    name: "no"
  }, {
    path: "/activity/airdrop",
    component: _1e16834e,
    name: "activity-airdrop"
  }, {
    path: "/activity/blindbox",
    component: _65e970f7,
    name: "activity-blindbox"
  }, {
    path: "/activity/blindboxInvite",
    component: _330b97e0,
    name: "activity-blindboxInvite"
  }, {
    path: "/activity/cbkbexchange",
    component: _4b1489fa,
    name: "activity-cbkbexchange"
  }, {
    path: "/activity/mining",
    component: _8a23a01e,
    name: "activity-mining"
  }, {
    path: "/activity/nftLottery",
    component: _0abcfe4e,
    name: "activity-nftLottery"
  }, {
    path: "/activity/noviceBenefits",
    component: _32bd48da,
    name: "activity-noviceBenefits"
  }, {
    path: "/activity/staking",
    component: _0a73f44c,
    name: "activity-staking"
  }, {
    path: "/activity/trading",
    component: _6ae99336,
    name: "activity-trading"
  }, {
    path: "/mint_nft_token/BK",
    component: _1efb139d,
    name: "mint_nft_token-BK"
  }, {
    path: "/activity/blindbox/detail",
    component: _4f6736ff,
    name: "activity-blindbox-detail"
  }, {
    path: "/activity/blindbox/download",
    component: _6bb9fd1a,
    name: "activity-blindbox-download"
  }, {
    path: "/activity/blindbox/firendList",
    component: _19ba2c55,
    name: "activity-blindbox-firendList"
  }, {
    path: "/activity/blindbox/list",
    component: _1b2d1009,
    name: "activity-blindbox-list"
  }, {
    path: "/activity/blindbox/stepDetail",
    component: _53be6030,
    name: "activity-blindbox-stepDetail"
  }, {
    path: "/activity/blindboxInvite/copy",
    component: _00fe3558,
    name: "activity-blindboxInvite-copy"
  }, {
    path: "/activity/blindboxInvite/detail",
    component: _728b189a,
    name: "activity-blindboxInvite-detail"
  }, {
    path: "/activity/blindboxInvite/download",
    component: _637105ea,
    name: "activity-blindboxInvite-download"
  }, {
    path: "/activity/blindboxInvite/inviteList",
    component: _b3d03aae,
    name: "activity-blindboxInvite-inviteList"
  }, {
    path: "/activity/blindboxInvite/rewardList",
    component: _17fd7ccf,
    name: "activity-blindboxInvite-rewardList"
  }, {
    path: "/activity/blindboxInvite/RuleDetail",
    component: _16191a22,
    name: "activity-blindboxInvite-RuleDetail"
  }, {
    path: "/activity/mining/history",
    component: _8804161a,
    name: "activity-mining-history"
  }, {
    path: "/activity/mining/inviteRuleDetail",
    component: _32dabbf2,
    name: "activity-mining-inviteRuleDetail"
  }, {
    path: "/activity/mining/miningRule",
    component: _268e46dd,
    name: "activity-mining-miningRule"
  }, {
    path: "/activity/mining/protocol",
    component: _44ed6649,
    name: "activity-mining-protocol"
  }, {
    path: "/activity/mining/RuleDetail",
    component: _f01b8504,
    name: "activity-mining-RuleDetail"
  }, {
    path: "/activity/noviceBenefits/drawluckly",
    component: _03154551,
    name: "activity-noviceBenefits-drawluckly"
  }, {
    path: "/activity/noviceBenefits/inviteRuleDetail",
    component: _32313d25,
    name: "activity-noviceBenefits-inviteRuleDetail"
  }, {
    path: "/activity/noviceBenefits/lotteryresults",
    component: _7d1df99c,
    name: "activity-noviceBenefits-lotteryresults"
  }, {
    path: "/activity/staking/addPool",
    component: _17f169d7,
    name: "activity-staking-addPool"
  }, {
    path: "/activity/staking/myPool",
    component: _5b754cde,
    name: "activity-staking-myPool"
  }, {
    path: "/activity/staking/protocol",
    component: _648a800e,
    name: "activity-staking-protocol"
  }, {
    path: "/activity/staking/wallet",
    component: _dc0ced80,
    name: "activity-staking-wallet"
  }, {
    path: "/activity/trading/history",
    component: _5aad9af8,
    name: "activity-trading-history"
  }, {
    path: "/activity/trading/protocol",
    component: _7c3280e4,
    name: "activity-trading-protocol"
  }, {
    path: "/activity/trading/tradingRule",
    component: _46e90ba1,
    name: "activity-trading-tradingRule"
  }, {
    path: "/activity/blindboxInvite/component/createPoster",
    component: _1f4eb79d,
    name: "activity-blindboxInvite-component-createPoster"
  }, {
    path: "/activity/blindbox/detail/:id",
    component: _4d04ed27,
    name: "activity-blindbox-detail-id"
  }, {
    path: "/article/detail/:id?",
    component: _74266e07,
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
