import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "@/views/MainView.vue";
import CategoryView from "@/views/CategoryView.vue";
import PositionView from "@/views/PositionView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainView,
  },
  {
    path: "/categories/:id",
    component: CategoryView,
  },
  {
    path: "/positions/:id",
    component: PositionView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
