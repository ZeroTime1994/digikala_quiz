import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
