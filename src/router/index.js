import Vue from "vue";
import VueRouter from "vue-router";

import articleDetail from "@/views/detail.vue";

import home from "@/views/home.vue";
import { config } from "@/config/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:id",
    name: "home",
    component: home,
    meta: {
      title: "",
    },
  },
  {
    path: "/article/detail/:id",
    name: "detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      title: "",
    },
    component: articleDetail,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   console.log({
  //     to,
  //     from,
  //     savedPosition
  //   })
  //   if (to.path == '/custom') {
  //     return savedPosition
  //   } else {
  //     return {
  //       y: 0
  //     };
  //   }
  //   // if(from.path=='custom'){
  //   //     po = savedPosition
  //   //     return {
  //   //         y:0
  //   //     }
  //   // }
  //   // if(to.path=='custom'){
  //   //   return po
  //   // }

  // }
});

router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  // const token_str = localStorage.getItem("token") || '0_0'
  // const [time, id] = token_str.split("_")
  // const token = parseInt(time) > new Date().getTime()
  // if (token) {
  //   localStorage.setItem("token", `${new Date().getTime()+config.login_timeout}_${id}`)
  // }
  // document.title = to.meta.title
  // if (to.path != '/') {
  //   if (!token) {
  //     next({
  //       path: "/"
  //     })
  //   } else {
  //     next()
  //   }

  // } else {
  //   if (token) {
  //     next({
  //       path: "/custom"
  //     })
  //   } else {
  //     next()
  //   }
  // }
  next();
});
export default router;
