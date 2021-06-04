// import { DatetimePicker ,Popup, Dialog, Toast, Icon, Image as VanImage, Loading, Lazyload} from "vant"
import {
  Popup,
  Dialog,
  Toast,
  Icon,
  Image as VanImage,
  Loading,
  Lazyload,
  Empty,
} from "vant";
import "vant/lib/popup/style";
// import 'vant/lib/datetime-picker/style';
import "vant/lib/toast/style";
import "vant/lib/dialog/style";
import "vant/lib/icon/local.css";
import "vant/lib/image/style";
import "vant/lib/loading/style";
import "vant/lib/lazyload/style";
import "vant/lib/empty/style";
const components = [
  Popup,
  Dialog,
  Toast,
  Icon,
  VanImage,
  Loading,
  Lazyload,
  Empty,
];
function install(Vue) {
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install: install,
  // version: version
};
