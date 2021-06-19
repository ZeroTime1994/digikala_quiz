import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueCompositionApi from "@vue/composition-api";
import VueDebounce from "vue-debounce";

//Plugins
import "./plugins/axios";

//Styles
import "./assets/scss/main.scss";

//External Css
//Material Icons
import "@mdi/font/css/materialdesignicons.min.css";

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);
Vue.use(VueDebounce);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
