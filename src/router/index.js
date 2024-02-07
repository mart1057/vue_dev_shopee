import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/products/ProductsItem.vue";
import ProductDetail from "@/views/product_detail/ProductDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: index,
  },
  {
    path: "/detail",
    name: "detail",
    component: ProductDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
