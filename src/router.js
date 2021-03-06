import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Explore from "./views/Explore.vue";
import Category from "./views/Category.vue"
import Product from "./views/Product.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/index",
      name: "home",
      component: Home
    },
    // {
      // path: "/about",
      // name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/product',
      component: Product
    }
  ]
});
