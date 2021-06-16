import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./plugins/axios";
import VueCompositionApi from "@vue/composition-api";
import "./assets/scss/main.scss";
import "@mdi/font/css/materialdesignicons.min.css";

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
