import { createRouter, createWebHistory } from "vue-router";
import TestView from "@/views/TestView.vue";

const routes = [
  {
    path: "/",
    name: "TestView",
    component: TestView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
