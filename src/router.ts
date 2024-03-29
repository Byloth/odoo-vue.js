import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const IS_PROD = (process.env.NODE_ENV === "production");
const BASE_URL = IS_PROD ? "/vuejs_example/static/src/" : process.env.BASE_URL;

export default new Router({
  mode: "history",
  base: BASE_URL,
  routes: [
    {
      path: "/index.html",
      name: "home",
      component: Home
    },
    {
      path: "/about.html",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
