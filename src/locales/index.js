import Vue from 'vue'
import VueI18n from 'vue-i18n'
import vantMessage from "@/locales/vant"
import { Locale}  from "vant"
Vue.use(VueI18n)
const messages = {
    'en': require('@/locales/en.js'),
    'fr': require('@/locales/fr.js'),
    'ja': require('@/locales/ja.js'),
    'ko': require('@/locales/ko.js'),
    'vi': require('@/locales/vi.js'),
    'zh': require('@/locales/zh.js'),
    'zh_tw':require('@/locales/zh_tw.js'),
    'id':require('@/locales/id.js')
}
let i18n = null
const defaultLocale = 'en'
export const getI18n =function(){
   return  i18n 
}
export default function changeHelper(lang,locales) {
    locales =  locales || Vue.prototype.$store.state.local.locales
    lang = lang === 'zh_tw' ? lang : (lang||"").slice(0,2)
    if (i18n) {
        if(locales.indexOf(lang)==-1) return 
        i18n.locale = lang
        vantMessage[lang] ? Locale.use(lang, vantMessage[lang]) : Locale.use(defaultLocale, vantMessage[defaultLocale])
        return i18n
    }
    i18n = new VueI18n ({
        locale: lang || defaultLocale,
        fallbackLocale: defaultLocale,
        messages
    });
    vantMessage[lang] ? Locale.use(lang, vantMessage[lang]) : Locale.use(defaultLocale, vantMessage[defaultLocale])
    return i18n
}


