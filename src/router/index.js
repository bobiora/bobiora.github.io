import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//import Cart from "../components/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "some",
    component: Home
  },
  {
    path: "/shop",
    name: "shop",
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue")
  },
  {
    path: "/shop/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "Cart" */ "../components/cart/Cart.vue"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
