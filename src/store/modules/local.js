
import { debug } from 'debug'

import { parseUA } from '@/tools/common'
import changeHelper from "../../locales"

const log = process.env.BUILD_ENV == 'pro' ? (...arg) => {
  console.log("bit-vuex-local:", ...arg)
} : debug('bit-vuex-local')
const INIT_STATE = {
  locale: "en", //  语言设置
  locales: ['zh','en','ja','ko','vi'],
  bitkeep: {
    language: 'en',
    currency: 'cny',
    os: 'android',
    package: 'com.bitkeep.wallet5',
    clientversion: '6.1.6',
    ua: 'BitKeep Android/6.1.6',
    token: '',
    mylanguage: 'en',
    brand: 'Android',
  },
  userInfo: {
    token: ""
  },
  UA: {
    ios: false,
    android: false,
    Mobile: false,
    MobileAll: false,
    wPhone: false,
    PC: false,
    weixin: false,
    bitkeepios: false,
    bitkeepandroid: false,
    isPhonx: false,
    isMiniProgram: false, //小程序环境
    isDingDing: false // 钉钉环境
  }
}


const state = _ => ({
  ...INIT_STATE
})

const actions = {
  async nuxtServerInit({ commit, state }, ctx) {
    const { params,
      query, req } = ctx

    let locale =  query.lang || params.lang
    //UA
    let headerUa = req.headers.ua ? req.headers.ua : '';
    commit('SET_UA', parseUA(req.headers['user-agent'], headerUa));

    //App内嵌
    if (state.UA.isBitKeep) {
      log("内嵌bitkeep app 设置参数",state.UA.isBitKeep)
      commit('SET_BIT_KEEP', {
        language: req.headers.language,
        currency: req.headers.currency,
        os: req.headers.os,
        package: req.headers.package,
        ua: req.headers.ua,
        token: req.headers.token,
        mylanguage: req.headers.mylanguage,
        brand: req.headers.brand,
      });
      locale = req.headers.mylanguage || req.headers.language
      if(!state.locales.find(lan=>lan==(locale || '').slice(0, 2))){
        locale = 'en'
      }
    }else{
      const acceptLanguage = req.headers['accept-language']
      if(acceptLanguage){
        locale = locale ||  acceptLanguage.split(",")[0]
      }
    }



    commit("CHANGE_LANG", locale);
    log("当前语言",{locale} )
  }
}

const getters = {

}

const mutations = {
  "CHANGE_LANG"(state, data) {

    if (data) data = data.slice(0, 2).toLowerCase()

    if (state.locales.indexOf(data) !== -1) {
      state.locale = data || state.locale
      changeHelper(state.locale)
      log("切换语言",data)
      // langMouedles[state.locale] && Locale.use(state.locale, langMouedles[state.locale])
    }else{
      changeHelper("en")
    }
  },
  "SET_BIT_KEEP"(state, data) {
    if (data.token) {
      state.userInfo.token = data.token
    }
    Object.assign(state.bitkeep, data)
    log("SET_BIT_KEEP",state)
  },
  "SET_USER"(state, data) {
    Object.assign(state.userInfo, data)
  },
  "SET_UA"(state, data) {
    Object.assign(state.UA, data)
  }

}

export default {
  state,
  actions,
  getters,
  mutations
}

