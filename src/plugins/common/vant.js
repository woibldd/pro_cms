import Vue from "vue"
import {
    Popup,
    Dialog,
    Toast,
    Icon,
    Image as VanImage,
    Loading,
    // Lazyload,
    Empty,
    ImagePreview
} from "vant";
// import "vant/lib/popup/style";
// // import 'vant/lib/datetime-picker/style';
// import "vant/lib/toast/style";
// import "vant/lib/dialog/style";
// import "vant/lib/icon/local.css";
// import "vant/lib/image/style";
// import "vant/lib/loading/style";
// import "vant/lib/lazyload/style";
// import "vant/lib/empty/style";
// import "vant/lib/image-preview/style";

const components = [
    Popup,
    Dialog,
    Toast,
    Icon,
    VanImage,
    Loading,
    // Lazyload,
    Empty,
    ImagePreview
];
function install(Vue) {
    components.forEach(function (item) {
        console.log({ item })
        if (item.install) {
            Vue.use(item);
        } else if (item.name) {
            Vue.component(item.name, item);
        }
    });
}
install(Vue)

// if (typeof window !== "undefined" && window.Vue) {
//     install(window.Vue);
// }

// export default {
//     install: install,
//     // version: version
// };
