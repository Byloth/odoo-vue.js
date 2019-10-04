import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

#
# TODO: addons/web/static/src/js/core/rpc.js
#

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
