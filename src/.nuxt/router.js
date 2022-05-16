import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _818e785a = () => interopDefault(import('../pages/polygon/index.vue' /* webpackChunkName: "pages/polygon/index" */))
const _74ffa454 = () => interopDefault(import('../pages/activity/airdrop/index.vue' /* webpackChunkName: "pages/activity/airdrop/index" */))
const _a895d122 = () => interopDefault(import('../pages/activity/blindbox/index.vue' /* webpackChunkName: "pages/activity/blindbox/index" */))
const _6a22f750 = () => interopDefault(import('../pages/activity/blindboxInvite/index.vue' /* webpackChunkName: "pages/activity/blindboxInvite/index" */))
const _458f971c = () => interopDefault(import('../pages/activity/cbkbexchange/index.vue' /* webpackChunkName: "pages/activity/cbkbexchange/index" */))
const _1c3dd72e = () => interopDefault(import('../pages/activity/mining/index.vue' /* webpackChunkName: "pages/activity/mining/index" */))
const _0c38e6c6 = () => interopDefault(import('../pages/activity/nftLottery/index.vue' /* webpackChunkName: "pages/activity/nftLottery/index" */))
const _7e84480b = () => interopDefault(import('../pages/activity/noviceBenefits/index.vue' /* webpackChunkName: "pages/activity/noviceBenefits/index" */))
const _68fc7ad2 = () => interopDefault(import('../pages/activity/polygon/index.vue' /* webpackChunkName: "pages/activity/polygon/index" */))
const _9c44c258 = () => interopDefault(import('../pages/activity/staking/index.vue' /* webpackChunkName: "pages/activity/staking/index" */))
const _12533dbe = () => interopDefault(import('../pages/activity/trading/index.vue' /* webpackChunkName: "pages/activity/trading/index" */))
const _983c4cf2 = () => interopDefault(import('../pages/activity/blindbox/detail/index.vue' /* webpackChunkName: "pages/activity/blindbox/detail/index" */))
const _0fb7b00a = () => interopDefault(import('../pages/activity/blindbox/download.vue' /* webpackChunkName: "pages/activity/blindbox/download" */))
const _67e85e46 = () => interopDefault(import('../pages/activity/blindbox/firendList.vue' /* webpackChunkName: "pages/activity/blindbox/firendList" */))
const _7ad28ade = () => interopDefault(import('../pages/activity/blindbox/list.vue' /* webpackChunkName: "pages/activity/blindbox/list" */))
const _ef1b1720 = () => interopDefault(import('../pages/activity/blindbox/stepDetail.vue' /* webpackChunkName: "pages/activity/blindbox/stepDetail" */))
const _d9bc4060 = () => interopDefault(import('../pages/activity/blindboxInvite/copy.js' /* webpackChunkName: "pages/activity/blindboxInvite/copy" */))
const _2b35163b = () => interopDefault(import('../pages/activity/blindboxInvite/detail.vue' /* webpackChunkName: "pages/activity/blindboxInvite/detail" */))
const _d865b31c = () => interopDefault(import('../pages/activity/blindboxInvite/download.vue' /* webpackChunkName: "pages/activity/blindboxInvite/download" */))
const _2fee0131 = () => interopDefault(import('../pages/activity/blindboxInvite/inviteList.vue' /* webpackChunkName: "pages/activity/blindboxInvite/inviteList" */))
const _bc58c952 = () => interopDefault(import('../pages/activity/blindboxInvite/rewardList.vue' /* webpackChunkName: "pages/activity/blindboxInvite/rewardList" */))
const _7ec99177 = () => interopDefault(import('../pages/activity/blindboxInvite/RuleDetail.vue' /* webpackChunkName: "pages/activity/blindboxInvite/RuleDetail" */))
const _01c99b6b = () => interopDefault(import('../pages/activity/mining/history.vue' /* webpackChunkName: "pages/activity/mining/history" */))
const _16eec28f = () => interopDefault(import('../pages/activity/mining/inviteRuleDetail.vue' /* webpackChunkName: "pages/activity/mining/inviteRuleDetail" */))
const _548f6d65 = () => interopDefault(import('../pages/activity/mining/miningRule.vue' /* webpackChunkName: "pages/activity/mining/miningRule" */))
const _8ed2e25e = () => interopDefault(import('../pages/activity/mining/protocol.vue' /* webpackChunkName: "pages/activity/mining/protocol" */))
const _941937f4 = () => interopDefault(import('../pages/activity/mining/RuleDetail.vue' /* webpackChunkName: "pages/activity/mining/RuleDetail" */))
const _e629384e = () => interopDefault(import('../pages/activity/noviceBenefits/drawluckly.vue' /* webpackChunkName: "pages/activity/noviceBenefits/drawluckly" */))
const _ce6f54a6 = () => interopDefault(import('../pages/activity/noviceBenefits/inviteRuleDetail.vue' /* webpackChunkName: "pages/activity/noviceBenefits/inviteRuleDetail" */))
const _4b9cd7b8 = () => interopDefault(import('../pages/activity/noviceBenefits/lotteryresults.vue' /* webpackChunkName: "pages/activity/noviceBenefits/lotteryresults" */))
const _e8cadb42 = () => interopDefault(import('../pages/activity/staking/addPool.vue' /* webpackChunkName: "pages/activity/staking/addPool" */))
const _bd7e1954 = () => interopDefault(import('../pages/activity/staking/myPool.vue' /* webpackChunkName: "pages/activity/staking/myPool" */))
const _66066886 = () => interopDefault(import('../pages/activity/staking/protocol.vue' /* webpackChunkName: "pages/activity/staking/protocol" */))
const _396333c8 = () => interopDefault(import('../pages/activity/staking/wallet.js' /* webpackChunkName: "pages/activity/staking/wallet" */))
const _63527900 = () => interopDefault(import('../pages/activity/trading/history.vue' /* webpackChunkName: "pages/activity/trading/history" */))
const _7dae695c = () => interopDefault(import('../pages/activity/trading/protocol.vue' /* webpackChunkName: "pages/activity/trading/protocol" */))
const _0d8a9fae = () => interopDefault(import('../pages/activity/trading/tradingRule.vue' /* webpackChunkName: "pages/activity/trading/tradingRule" */))
const _aef96bb6 = () => interopDefault(import('../pages/activity/blindboxInvite/component/createPoster.vue' /* webpackChunkName: "pages/activity/blindboxInvite/component/createPoster" */))
const _0152dca2 = () => interopDefault(import('../pages/activity/blindbox/detail/_id.vue' /* webpackChunkName: "pages/activity/blindbox/detail/_id" */))
const _f44ac6e2 = () => interopDefault(import('../pages/article/detail/_id.vue' /* webpackChunkName: "pages/article/detail/_id" */))
const _2ae844d0 = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/polygon",
    component: _818e785a,
    name: "polygon"
  }, {
    path: "/activity/airdrop",
    component: _74ffa454,
    name: "activity-airdrop"
  }, {
    path: "/activity/blindbox",
    component: _a895d122,
    name: "activity-blindbox"
  }, {
    path: "/activity/blindboxInvite",
    component: _6a22f750,
    name: "activity-blindboxInvite"
  }, {
    path: "/activity/cbkbexchange",
    component: _458f971c,
    name: "activity-cbkbexchange"
  }, {
    path: "/activity/mining",
    component: _1c3dd72e,
    name: "activity-mining"
  }, {
    path: "/activity/nftLottery",
    component: _0c38e6c6,
    name: "activity-nftLottery"
  }, {
    path: "/activity/noviceBenefits",
    component: _7e84480b,
    name: "activity-noviceBenefits"
  }, {
    path: "/activity/polygon",
    component: _68fc7ad2,
    name: "activity-polygon"
  }, {
    path: "/activity/staking",
    component: _9c44c258,
    name: "activity-staking"
  }, {
    path: "/activity/trading",
    component: _12533dbe,
    name: "activity-trading"
  }, {
    path: "/activity/blindbox/detail",
    component: _983c4cf2,
    name: "activity-blindbox-detail"
  }, {
    path: "/activity/blindbox/download",
    component: _0fb7b00a,
    name: "activity-blindbox-download"
  }, {
    path: "/activity/blindbox/firendList",
    component: _67e85e46,
    name: "activity-blindbox-firendList"
  }, {
    path: "/activity/blindbox/list",
    component: _7ad28ade,
    name: "activity-blindbox-list"
  }, {
    path: "/activity/blindbox/stepDetail",
    component: _ef1b1720,
    name: "activity-blindbox-stepDetail"
  }, {
    path: "/activity/blindboxInvite/copy",
    component: _d9bc4060,
    name: "activity-blindboxInvite-copy"
  }, {
    path: "/activity/blindboxInvite/detail",
    component: _2b35163b,
    name: "activity-blindboxInvite-detail"
  }, {
    path: "/activity/blindboxInvite/download",
    component: _d865b31c,
    name: "activity-blindboxInvite-download"
  }, {
    path: "/activity/blindboxInvite/inviteList",
    component: _2fee0131,
    name: "activity-blindboxInvite-inviteList"
  }, {
    path: "/activity/blindboxInvite/rewardList",
    component: _bc58c952,
    name: "activity-blindboxInvite-rewardList"
  }, {
    path: "/activity/blindboxInvite/RuleDetail",
    component: _7ec99177,
    name: "activity-blindboxInvite-RuleDetail"
  }, {
    path: "/activity/mining/history",
    component: _01c99b6b,
    name: "activity-mining-history"
  }, {
    path: "/activity/mining/inviteRuleDetail",
    component: _16eec28f,
    name: "activity-mining-inviteRuleDetail"
  }, {
    path: "/activity/mining/miningRule",
    component: _548f6d65,
    name: "activity-mining-miningRule"
  }, {
    path: "/activity/mining/protocol",
    component: _8ed2e25e,
    name: "activity-mining-protocol"
  }, {
    path: "/activity/mining/RuleDetail",
    component: _941937f4,
    name: "activity-mining-RuleDetail"
  }, {
    path: "/activity/noviceBenefits/drawluckly",
    component: _e629384e,
    name: "activity-noviceBenefits-drawluckly"
  }, {
    path: "/activity/noviceBenefits/inviteRuleDetail",
    component: _ce6f54a6,
    name: "activity-noviceBenefits-inviteRuleDetail"
  }, {
    path: "/activity/noviceBenefits/lotteryresults",
    component: _4b9cd7b8,
    name: "activity-noviceBenefits-lotteryresults"
  }, {
    path: "/activity/staking/addPool",
    component: _e8cadb42,
    name: "activity-staking-addPool"
  }, {
    path: "/activity/staking/myPool",
    component: _bd7e1954,
    name: "activity-staking-myPool"
  }, {
    path: "/activity/staking/protocol",
    component: _66066886,
    name: "activity-staking-protocol"
  }, {
    path: "/activity/staking/wallet",
    component: _396333c8,
    name: "activity-staking-wallet"
  }, {
    path: "/activity/trading/history",
    component: _63527900,
    name: "activity-trading-history"
  }, {
    path: "/activity/trading/protocol",
    component: _7dae695c,
    name: "activity-trading-protocol"
  }, {
    path: "/activity/trading/tradingRule",
    component: _0d8a9fae,
    name: "activity-trading-tradingRule"
  }, {
    path: "/activity/blindboxInvite/component/createPoster",
    component: _aef96bb6,
    name: "activity-blindboxInvite-component-createPoster"
  }, {
    path: "/activity/blindbox/detail/:id",
    component: _0152dca2,
    name: "activity-blindbox-detail-id"
  }, {
    path: "/article/detail/:id?",
    component: _f44ac6e2,
    name: "article-detail-id"
  }, {
    path: "/:id?",
    component: _2ae844d0,
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
