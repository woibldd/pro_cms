import Vue from "vue"
import {debug} from "debug"
// import VueCanvasPoster from 'vue-canvas-poster'
import createVueI18n from "../../locales"
const log  = debug("init")



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
    // Badge,
    PullRefresh,
    Overlay,
    Skeleton
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
    PullRefresh,
    ImagePreview,
    // Badge,
    Overlay,
    Field,
    Form,
    Skeleton,
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
  const {locale,UA }    = store.state.local
  Vue.prototype.$store = store
  app.i18n = createVueI18n(locale)
  if(!UA.isBitKeep &&  process.client ){
    createVueI18n(lang || navigator.language)
  }
  
}
