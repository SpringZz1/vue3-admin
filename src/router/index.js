import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/workbench",
      name: "workbench",
      component: () => import("../views/workbench/index.vue"),
    },
  ],
});

export default router;
