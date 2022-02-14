import { wrapFunctional } from './utils'

export { default as Activity } from '../../components/activity/index.vue'
export { default as CommonCVueCountdown } from '../../components/common/c-vue-countdown.vue'
export { default as CommonHeader } from '../../components/common/header.vue'
export { default as Common } from '../../components/common/index.js'
export { default as Trading } from '../../components/trading/index.vue'
export { default as BlindboxBlindButton } from '../../components/blindbox/BlindButton.vue'
export { default as BlindboxBlindStrategy } from '../../components/blindbox/blindStrategy.vue'
export { default as BlindboxBlindTimeText } from '../../components/blindbox/blindTimeText.vue'
export { default as BlindboxCreatePoster } from '../../components/blindbox/createPoster.vue'
export { default as BlindboxTitleImage } from '../../components/blindbox/titleImage.vue'
export { default as VueCreatePosterLayoutCanvasPoster } from '../../components/vue-create-poster/layout/canvas-poster.vue'
export { default as VueCreatePosterLayoutGradient } from '../../components/vue-create-poster/layout/gradient.js'
export { default as VueCreatePosterLayoutHeader } from '../../components/vue-create-poster/layout/header.vue'
export { default as VueCreatePosterLayout } from '../../components/vue-create-poster/layout/index.js'
export { default as VueCreatePosterLayoutPainter } from '../../components/vue-create-poster/layout/painter.js'
export { default as VueCreatePosterLayoutQrcode } from '../../components/vue-create-poster/layout/qrcode.js'
export { default as VueCreatePosterLayoutUtil } from '../../components/vue-create-poster/layout/util.js'

export const LazyActivity = import('../../components/activity/index.vue' /* webpackChunkName: "components/activity" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonCVueCountdown = import('../../components/common/c-vue-countdown.vue' /* webpackChunkName: "components/common-c-vue-countdown" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonHeader = import('../../components/common/header.vue' /* webpackChunkName: "components/common-header" */).then(c => wrapFunctional(c.default || c))
export const LazyCommon = import('../../components/common/index.js' /* webpackChunkName: "components/common" */).then(c => wrapFunctional(c.default || c))
export const LazyTrading = import('../../components/trading/index.vue' /* webpackChunkName: "components/trading" */).then(c => wrapFunctional(c.default || c))
export const LazyBlindboxBlindButton = import('../../components/blindbox/BlindButton.vue' /* webpackChunkName: "components/blindbox-blind-button" */).then(c => wrapFunctional(c.default || c))
export const LazyBlindboxBlindStrategy = import('../../components/blindbox/blindStrategy.vue' /* webpackChunkName: "components/blindbox-blind-strategy" */).then(c => wrapFunctional(c.default || c))
export const LazyBlindboxBlindTimeText = import('../../components/blindbox/blindTimeText.vue' /* webpackChunkName: "components/blindbox-blind-time-text" */).then(c => wrapFunctional(c.default || c))
export const LazyBlindboxCreatePoster = import('../../components/blindbox/createPoster.vue' /* webpackChunkName: "components/blindbox-create-poster" */).then(c => wrapFunctional(c.default || c))
export const LazyBlindboxTitleImage = import('../../components/blindbox/titleImage.vue' /* webpackChunkName: "components/blindbox-title-image" */).then(c => wrapFunctional(c.default || c))
export const LazyVueCreatePosterLayoutCanvasPoster = import('../../components/vue-create-poster/layout/canvas-poster.vue' /* webpackChunkName: "components/vue-create-poster-layout-canvas-poster" */).then(c => wrapFunctional(c.default || c))
export const LazyVueCreatePosterLayoutGradient = import('../../components/vue-create-poster/layout/gradient.js' /* webpackChunkName: "components/vue-create-poster-layout-gradient" */).then(c => wrapFunctional(c.default || c))
export const LazyVueCreatePosterLayoutHeader = import('../../components/vue-create-poster/layout/header.vue' /* webpackChunkName: "components/vue-create-poster-layout-header" */).then(c => wrapFunctional(c.default || c))
export const LazyVueCreatePosterLayout = import('../../components/vue-create-poster/layout/index.js' /* webpackChunkName: "components/vue-create-poster-layout" */).then(c => wrapFunctional(c.default || c))
export const LazyVueCreatePosterLayoutPainter = import('../../components/vue-create-poster/layout/painter.js' /* webpackChunkName: "components/vue-create-poster-layout-painter" */).then(c => wrapFunctional(c.default || c))
export const LazyVueCreatePosterLayoutQrcode = import('../../components/vue-create-poster/layout/qrcode.js' /* webpackChunkName: "components/vue-create-poster-layout-qrcode" */).then(c => wrapFunctional(c.default || c))
export const LazyVueCreatePosterLayoutUtil = import('../../components/vue-create-poster/layout/util.js' /* webpackChunkName: "components/vue-create-poster-layout-util" */).then(c => wrapFunctional(c.default || c))
