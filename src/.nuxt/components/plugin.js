import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Activity: () => import('../../components/activity/index.vue' /* webpackChunkName: "components/activity" */).then(c => wrapFunctional(c.default || c)),
  BlindboxBlindButton: () => import('../../components/blindbox/BlindButton.vue' /* webpackChunkName: "components/blindbox-blind-button" */).then(c => wrapFunctional(c.default || c)),
  BlindboxBlindStrategy: () => import('../../components/blindbox/blindStrategy.vue' /* webpackChunkName: "components/blindbox-blind-strategy" */).then(c => wrapFunctional(c.default || c)),
  BlindboxBlindTimeText: () => import('../../components/blindbox/blindTimeText.vue' /* webpackChunkName: "components/blindbox-blind-time-text" */).then(c => wrapFunctional(c.default || c)),
  BlindboxCreatePoster: () => import('../../components/blindbox/createPoster.vue' /* webpackChunkName: "components/blindbox-create-poster" */).then(c => wrapFunctional(c.default || c)),
  BlindboxTitleImage: () => import('../../components/blindbox/titleImage.vue' /* webpackChunkName: "components/blindbox-title-image" */).then(c => wrapFunctional(c.default || c)),
  CommonCVueCountdown: () => import('../../components/common/c-vue-countdown.vue' /* webpackChunkName: "components/common-c-vue-countdown" */).then(c => wrapFunctional(c.default || c)),
  CommonHeader: () => import('../../components/common/header.vue' /* webpackChunkName: "components/common-header" */).then(c => wrapFunctional(c.default || c)),
  Common: () => import('../../components/common/index.js' /* webpackChunkName: "components/common" */).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutCanvasPoster: () => import('../../components/vue-create-poster/layout/canvas-poster.vue' /* webpackChunkName: "components/vue-create-poster-layout-canvas-poster" */).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutGradient: () => import('../../components/vue-create-poster/layout/gradient.js' /* webpackChunkName: "components/vue-create-poster-layout-gradient" */).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutHeader: () => import('../../components/vue-create-poster/layout/header.vue' /* webpackChunkName: "components/vue-create-poster-layout-header" */).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayout: () => import('../../components/vue-create-poster/layout/index.js' /* webpackChunkName: "components/vue-create-poster-layout" */).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutPainter: () => import('../../components/vue-create-poster/layout/painter.js' /* webpackChunkName: "components/vue-create-poster-layout-painter" */).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutQrcode: () => import('../../components/vue-create-poster/layout/qrcode.js' /* webpackChunkName: "components/vue-create-poster-layout-qrcode" */).then(c => wrapFunctional(c.default || c)),
  VueCreatePosterLayoutUtil: () => import('../../components/vue-create-poster/layout/util.js' /* webpackChunkName: "components/vue-create-poster-layout-util" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
