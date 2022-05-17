import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e41d0026 = () => interopDefault(import('..\\pages\\mint_nft_token\\index.vue' /* webpackChunkName: "pages/mint_nft_token/index" */))
const _8d955638 = () => interopDefault(import('..\\pages\\activity\\airdrop\\index.vue' /* webpackChunkName: "pages/activity/airdrop/index" */))
const _7991ce61 = () => interopDefault(import('..\\pages\\activity\\blindbox\\index.vue' /* webpackChunkName: "pages/activity/blindbox/index" */))
const _42139a58 = () => interopDefault(import('..\\pages\\activity\\blindboxInvite\\index.vue' /* webpackChunkName: "pages/activity/blindboxInvite/index" */))
const _75d4b43e = () => interopDefault(import('..\\pages\\activity\\cbkbexchange\\index.vue' /* webpackChunkName: "pages/activity/cbkbexchange/index" */))
const _4b864767 = () => interopDefault(import('..\\pages\\activity\\mining\\index.vue' /* webpackChunkName: "pages/activity/mining/index" */))
const _087c79ac = () => interopDefault(import('..\\pages\\activity\\nftLottery\\index.vue' /* webpackChunkName: "pages/activity/nftLottery/index" */))
const _01364d05 = () => interopDefault(import('..\\pages\\activity\\noviceBenefits\\index.vue' /* webpackChunkName: "pages/activity/noviceBenefits/index" */))
const _588603a6 = () => interopDefault(import('..\\pages\\activity\\staking\\index.vue' /* webpackChunkName: "pages/activity/staking/index" */))
const _06c441fc = () => interopDefault(import('..\\pages\\activity\\trading\\index.vue' /* webpackChunkName: "pages/activity/trading/index" */))
const _665f06f0 = () => interopDefault(import('..\\pages\\activity\\blindbox\\detail\\index.vue' /* webpackChunkName: "pages/activity/blindbox/detail/index" */))
const _5ff1b3c9 = () => interopDefault(import('..\\pages\\activity\\blindbox\\download.vue' /* webpackChunkName: "pages/activity/blindbox/download" */))
const _76a5a12b = () => interopDefault(import('..\\pages\\activity\\blindbox\\firendList.vue' /* webpackChunkName: "pages/activity/blindbox/firendList" */))
const _d0a34542 = () => interopDefault(import('..\\pages\\activity\\blindbox\\list.vue' /* webpackChunkName: "pages/activity/blindbox/list" */))
const _330c44be = () => interopDefault(import('..\\pages\\activity\\blindbox\\stepDetail.vue' /* webpackChunkName: "pages/activity/blindbox/stepDetail" */))
const _c6d71460 = () => interopDefault(import('..\\pages\\activity\\blindboxInvite\\copy.js' /* webpackChunkName: "pages/activity/blindboxInvite/copy" */))
const _ce9a7f8a = () => interopDefault(import('..\\pages\\activity\\blindboxInvite\\detail.vue' /* webpackChunkName: "pages/activity/blindboxInvite/detail" */))
const _ceef5f1c = () => interopDefault(import('..\\pages\\activity\\blindboxInvite\\download.vue' /* webpackChunkName: "pages/activity/blindboxInvite/download" */))
const _1af2a99e = () => interopDefault(import('..\\pages\\activity\\blindboxInvite\\inviteList.vue' /* webpackChunkName: "pages/activity/blindboxInvite/inviteList" */))
const _646c4557 = () => interopDefault(import('..\\pages\\activity\\blindboxInvite\\rewardList.vue' /* webpackChunkName: "pages/activity/blindboxInvite/rewardList" */))
const _41623b77 = () => interopDefault(import('..\\pages\\activity\\blindboxInvite\\RuleDetail.vue' /* webpackChunkName: "pages/activity/blindboxInvite/RuleDetail" */))
const _f223f22e = () => interopDefault(import('..\\pages\\activity\\mining\\history.vue' /* webpackChunkName: "pages/activity/mining/history" */))
const _08b864d1 = () => interopDefault(import('..\\pages\\activity\\mining\\inviteRuleDetail.vue' /* webpackChunkName: "pages/activity/mining/inviteRuleDetail" */))
const _3dc86927 = () => interopDefault(import('..\\pages\\activity\\mining\\miningRule.vue' /* webpackChunkName: "pages/activity/mining/miningRule" */))
const _5000d9da = () => interopDefault(import('..\\pages\\activity\\mining\\protocol.vue' /* webpackChunkName: "pages/activity/mining/protocol" */))
const _c1a74070 = () => interopDefault(import('..\\pages\\activity\\mining\\RuleDetail.vue' /* webpackChunkName: "pages/activity/mining/RuleDetail" */))
const _67776b1f = () => interopDefault(import('..\\pages\\activity\\noviceBenefits\\drawluckly.vue' /* webpackChunkName: "pages/activity/noviceBenefits/drawluckly" */))
const _1ce75073 = () => interopDefault(import('..\\pages\\activity\\noviceBenefits\\inviteRuleDetail.vue' /* webpackChunkName: "pages/activity/noviceBenefits/inviteRuleDetail" */))
const _1586ef2c = () => interopDefault(import('..\\pages\\activity\\noviceBenefits\\lotteryresults.vue' /* webpackChunkName: "pages/activity/noviceBenefits/lotteryresults" */))
const _29bd0ab1 = () => interopDefault(import('..\\pages\\activity\\staking\\addPool.vue' /* webpackChunkName: "pages/activity/staking/addPool" */))
const _60b5ae78 = () => interopDefault(import('..\\pages\\activity\\staking\\myPool.vue' /* webpackChunkName: "pages/activity/staking/myPool" */))
const _e79a0b18 = () => interopDefault(import('..\\pages\\activity\\staking\\protocol.vue' /* webpackChunkName: "pages/activity/staking/protocol" */))
const _3fe8cecc = () => interopDefault(import('..\\pages\\activity\\staking\\wallet.js' /* webpackChunkName: "pages/activity/staking/wallet" */))
const _6a97b03e = () => interopDefault(import('..\\pages\\activity\\trading\\history.vue' /* webpackChunkName: "pages/activity/trading/history" */))
const _698b145e = () => interopDefault(import('..\\pages\\activity\\trading\\protocol.vue' /* webpackChunkName: "pages/activity/trading/protocol" */))
const _7d9b0de7 = () => interopDefault(import('..\\pages\\activity\\trading\\tradingRule.vue' /* webpackChunkName: "pages/activity/trading/tradingRule" */))
const _6671e1a8 = () => interopDefault(import('..\\pages\\activity\\blindboxInvite\\component\\createPoster.vue' /* webpackChunkName: "pages/activity/blindboxInvite/component/createPoster" */))
const _66e20558 = () => interopDefault(import('..\\pages\\activity\\blindbox\\detail\\_id.vue' /* webpackChunkName: "pages/activity/blindbox/detail/_id" */))
const _6fd6c0af = () => interopDefault(import('..\\pages\\article\\detail\\_id.vue' /* webpackChunkName: "pages/article/detail/_id" */))
const _3927d70e = () => interopDefault(import('..\\pages\\_id.vue' /* webpackChunkName: "pages/_id" */))

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
    component: _e41d0026,
    name: "mint_nft_token"
  }, {
    path: "/activity/airdrop",
    component: _8d955638,
    name: "activity-airdrop"
  }, {
    path: "/activity/blindbox",
    component: _7991ce61,
    name: "activity-blindbox"
  }, {
    path: "/activity/blindboxInvite",
    component: _42139a58,
    name: "activity-blindboxInvite"
  }, {
    path: "/activity/cbkbexchange",
    component: _75d4b43e,
    name: "activity-cbkbexchange"
  }, {
    path: "/activity/mining",
    component: _4b864767,
    name: "activity-mining"
  }, {
    path: "/activity/nftLottery",
    component: _087c79ac,
    name: "activity-nftLottery"
  }, {
    path: "/activity/noviceBenefits",
    component: _01364d05,
    name: "activity-noviceBenefits"
  }, {
    path: "/activity/staking",
    component: _588603a6,
    name: "activity-staking"
  }, {
    path: "/activity/trading",
    component: _06c441fc,
    name: "activity-trading"
  }, {
    path: "/activity/blindbox/detail",
    component: _665f06f0,
    name: "activity-blindbox-detail"
  }, {
    path: "/activity/blindbox/download",
    component: _5ff1b3c9,
    name: "activity-blindbox-download"
  }, {
    path: "/activity/blindbox/firendList",
    component: _76a5a12b,
    name: "activity-blindbox-firendList"
  }, {
    path: "/activity/blindbox/list",
    component: _d0a34542,
    name: "activity-blindbox-list"
  }, {
    path: "/activity/blindbox/stepDetail",
    component: _330c44be,
    name: "activity-blindbox-stepDetail"
  }, {
    path: "/activity/blindboxInvite/copy",
    component: _c6d71460,
    name: "activity-blindboxInvite-copy"
  }, {
    path: "/activity/blindboxInvite/detail",
    component: _ce9a7f8a,
    name: "activity-blindboxInvite-detail"
  }, {
    path: "/activity/blindboxInvite/download",
    component: _ceef5f1c,
    name: "activity-blindboxInvite-download"
  }, {
    path: "/activity/blindboxInvite/inviteList",
    component: _1af2a99e,
    name: "activity-blindboxInvite-inviteList"
  }, {
    path: "/activity/blindboxInvite/rewardList",
    component: _646c4557,
    name: "activity-blindboxInvite-rewardList"
  }, {
    path: "/activity/blindboxInvite/RuleDetail",
    component: _41623b77,
    name: "activity-blindboxInvite-RuleDetail"
  }, {
    path: "/activity/mining/history",
    component: _f223f22e,
    name: "activity-mining-history"
  }, {
    path: "/activity/mining/inviteRuleDetail",
    component: _08b864d1,
    name: "activity-mining-inviteRuleDetail"
  }, {
    path: "/activity/mining/miningRule",
    component: _3dc86927,
    name: "activity-mining-miningRule"
  }, {
    path: "/activity/mining/protocol",
    component: _5000d9da,
    name: "activity-mining-protocol"
  }, {
    path: "/activity/mining/RuleDetail",
    component: _c1a74070,
    name: "activity-mining-RuleDetail"
  }, {
    path: "/activity/noviceBenefits/drawluckly",
    component: _67776b1f,
    name: "activity-noviceBenefits-drawluckly"
  }, {
    path: "/activity/noviceBenefits/inviteRuleDetail",
    component: _1ce75073,
    name: "activity-noviceBenefits-inviteRuleDetail"
  }, {
    path: "/activity/noviceBenefits/lotteryresults",
    component: _1586ef2c,
    name: "activity-noviceBenefits-lotteryresults"
  }, {
    path: "/activity/staking/addPool",
    component: _29bd0ab1,
    name: "activity-staking-addPool"
  }, {
    path: "/activity/staking/myPool",
    component: _60b5ae78,
    name: "activity-staking-myPool"
  }, {
    path: "/activity/staking/protocol",
    component: _e79a0b18,
    name: "activity-staking-protocol"
  }, {
    path: "/activity/staking/wallet",
    component: _3fe8cecc,
    name: "activity-staking-wallet"
  }, {
    path: "/activity/trading/history",
    component: _6a97b03e,
    name: "activity-trading-history"
  }, {
    path: "/activity/trading/protocol",
    component: _698b145e,
    name: "activity-trading-protocol"
  }, {
    path: "/activity/trading/tradingRule",
    component: _7d9b0de7,
    name: "activity-trading-tradingRule"
  }, {
    path: "/activity/blindboxInvite/component/createPoster",
    component: _6671e1a8,
    name: "activity-blindboxInvite-component-createPoster"
  }, {
    path: "/activity/blindbox/detail/:id",
    component: _66e20558,
    name: "activity-blindbox-detail-id"
  }, {
    path: "/article/detail/:id?",
    component: _6fd6c0af,
    name: "article-detail-id"
  }, {
    path: "/:id?",
    component: _3927d70e,
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
