import Vue from "vue"
import {debug} from "debug"
// import VueCanvasPoster from 'vue-canvas-poster'
import createVueI18n from "../../locales"
Vue.prototype.$bus = new Vue();
const log = process.env.BUILD_ENV == 'pro' ? (...arg) => {
    console.log("bit:init", ...arg)
  } : debug('bit:init')



// import VueAwesomeSwiper from 'vue-awesome-swiper'

// Vue.use(VueAwesomeSwiper)

import {
    Field,
    Form,
    Popup,
    List,
    Dialog,
    Toast,
    Icon,
    Image as VanImage,
    Loading,
    Lazyload,
    Empty,
    ImagePreview,
    CountDown,
    // Badge,
    PullRefresh,
    Overlay,
    Skeleton,
    Button,
    Progress,
    Col,
    Row,
    Tab,
    Tabs,
    NoticeBar,
    Grid, 
    GridItem
} from "vant";

const components = [
    Popup,
    Dialog,
    Toast,
    Icon,
    VanImage,
    Loading,
    List,
    Empty,
    CountDown,
    PullRefresh,
    Progress,
    ImagePreview,
    // Badge,
    Overlay,
    Field,
    Form,
    Skeleton,
    Button,
    Col,
    Row,
    Tab,
    Tabs,
    NoticeBar, 
    Grid, 
    GridItem
    // Lazyload
    // VueCanvasPoster
];

//存在问题结合nuxt使用  服务端拿不到query
Vue.use(Lazyload, {
    lazyComponent: false,
});
function install(Vue) {
    components.forEach(function (item) {

        Vue.use(item);
        // console.log(item.install , item.name)
        // if (item.install) {
        //     Vue.use(item);
        // } else if (item.name) {
        //     Vue.component(item.name, item);
        // }
    });
}
install(Vue)

if(process.env.DEBUG && process.client){
    typeof VConsole !="undefined"  && new VConsole();

}



export default ({ app, store, query={},params={}}) => {
    // log({app, store })
  const lang = query.lang || params.lang
  const {locale, UA ,  bitkeep }    = store.state.local
  Vue.prototype.$store = store

  app.i18n = createVueI18n(locale)

  if(UA.isBitKeep &&  process.client ){
      if(sessionStorage.bitKeep){
        store.commit("SET_BIT_KEEP",sessionStorage.bitKeep)
      }else{
        sessionStorage.setItem("bitKeep",JSON.stringify(bitkeep))
      }

  }
  log("init: success")
}
