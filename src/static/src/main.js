import "./utils/flexble";
import Vue from "vue";
import Vant from "./pulgin/vant/index";
import App from "./App.vue";
import router from "./router";
import "./assets/rest.css";

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
