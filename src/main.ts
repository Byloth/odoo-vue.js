import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import axios from "axios";

axios.post('/web/dataset/call_kw/res.partner/browse/', {
    params: {
        args: [[1, 2, 3, 4], ["display_name"]],
        kwargs: {},
        model: 'res.partner',
        method: 'browse'
    }
})
.then(function(response)
{
    console.log(response);
})
.catch(function(error)
{
    console.log(error);
});

/*
 * TODO: addons/web/static/src/js/core/rpc.js
 */

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
