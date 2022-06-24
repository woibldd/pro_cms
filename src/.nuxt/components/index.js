export const Activity = () => import('../../components/activity/index.vue' /* webpackChunkName: "components/activity" */).then(c => wrapFunctional(c.default || c))
export const CommonCVueCountdown = () => import('../../components/common/c-vue-countdown.vue' /* webpackChunkName: "components/common-c-vue-countdown" */).then(c => wrapFunctional(c.default || c))
export const CommonHeader = () => import('../../components/common/header.vue' /* webpackChunkName: "components/common-header" */).then(c => wrapFunctional(c.default || c))
export const Common = () => import('../../components/common/index.js' /* webpackChunkName: "components/common" */).then(c => wrapFunctional(c.default || c))
export const PolygonAirdropAddressCard = () => import('../../components/polygon/AirdropAddressCard.vue' /* webpackChunkName: "components/polygon-airdrop-address-card" */).then(c => wrapFunctional(c.default || c))
export const PolygonAirdropAwardCard = () => import('../../components/polygon/AirdropAwardCard.vue' /* webpackChunkName: "components/polygon-airdrop-award-card" */).then(c => wrapFunctional(c.default || c))
export const PolygonInvitedCard = () => import('../../components/polygon/InvitedCard.vue' /* webpackChunkName: "components/polygon-invited-card" */).then(c => wrapFunctional(c.default || c))
export const PolygonMent = () => import('../../components/polygon/Ment.vue' /* webpackChunkName: "components/polygon-ment" */).then(c => wrapFunctional(c.default || c))
export const PolygonMint = () => import('../../components/polygon/Mint.vue' /* webpackChunkName: "components/polygon-mint" */).then(c => wrapFunctional(c.default || c))
export const PolygonMintSuccessCard = () => import('../../components/polygon/MintSuccessCard.vue' /* webpackChunkName: "components/polygon-mint-success-card" */).then(c => wrapFunctional(c.default || c))
export const PolygonWhitelistcard = () => import('../../components/polygon/Whitelistcard.vue' /* webpackChunkName: "components/polygon-whitelistcard" */).then(c => wrapFunctional(c.default || c))
export const PolygonCVueCountdown = () => import('../../components/polygon/c-vue-countdown.vue' /* webpackChunkName: "components/polygon-c-vue-countdown" */).then(c => wrapFunctional(c.default || c))
export const PolygonCountdown = () => import('../../components/polygon/countdown.vue' /* webpackChunkName: "components/polygon-countdown" */).then(c => wrapFunctional(c.default || c))
export const Trading = () => import('../../components/trading/index.vue' /* webpackChunkName: "components/trading" */).then(c => wrapFunctional(c.default || c))
export const BlindboxBlindButton = () => import('../../components/blindbox/BlindButton.vue' /* webpackChunkName: "components/blindbox-blind-button" */).then(c => wrapFunctional(c.default || c))
export const BlindboxBlindStrategy = () => import('../../components/blindbox/blindStrategy.vue' /* webpackChunkName: "components/blindbox-blind-strategy" */).then(c => wrapFunctional(c.default || c))
export const BlindboxBlindTimeText = () => import('../../components/blindbox/blindTimeText.vue' /* webpackChunkName: "components/blindbox-blind-time-text" */).then(c => wrapFunctional(c.default || c))
export const BlindboxCreatePoster = () => import('../../components/blindbox/createPoster.vue' /* webpackChunkName: "components/blindbox-create-poster" */).then(c => wrapFunctional(c.default || c))
export const BlindboxTitleImage = () => import('../../components/blindbox/titleImage.vue' /* webpackChunkName: "components/blindbox-title-image" */).then(c => wrapFunctional(c.default || c))
export const VueCreatePosterLayoutCanvasPoster = () => import('../../components/vue-create-poster/layout/canvas-poster.vue' /* webpackChunkName: "components/vue-create-poster-layout-canvas-poster" */).then(c => wrapFunctional(c.default || c))
export const VueCreatePosterLayoutGradient = () => import('../../components/vue-create-poster/layout/gradient.js' /* webpackChunkName: "components/vue-create-poster-layout-gradient" */).then(c => wrapFunctional(c.default || c))
export const VueCreatePosterLayoutHeader = () => import('../../components/vue-create-poster/layout/header.vue' /* webpackChunkName: "components/vue-create-poster-layout-header" */).then(c => wrapFunctional(c.default || c))
export const VueCreatePosterLayout = () => import('../../components/vue-create-poster/layout/index.js' /* webpackChunkName: "components/vue-create-poster-layout" */).then(c => wrapFunctional(c.default || c))
export const VueCreatePosterLayoutPainter = () => import('../../components/vue-create-poster/layout/painter.js' /* webpackChunkName: "components/vue-create-poster-layout-painter" */).then(c => wrapFunctional(c.default || c))
export const VueCreatePosterLayoutQrcode = () => import('../../components/vue-create-poster/layout/qrcode.js' /* webpackChunkName: "components/vue-create-poster-layout-qrcode" */).then(c => wrapFunctional(c.default || c))
export const VueCreatePosterLayoutUtil = () => import('../../components/vue-create-poster/layout/util.js' /* webpackChunkName: "components/vue-create-poster-layout-util" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
