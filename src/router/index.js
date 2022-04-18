import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "TestView",
    component: () => import("@/views/TestView.vue"),
  },
  {
    path: "/golden/go002",
    component: () =>
      import(
        "@/views/golden/goldSummaryTransDetails/GoldSummaryTransDetailsParent.vue"
      ),
    children: [
      {
        path: "010",
        name: "goldsummary",
        component: () =>
          import("@/views/golden/goldSummaryTransDetails/GoldSummary.vue"),
      },
      {
        path: "020",
        name: "goldtransDetails",
        component: () =>
          import("@/views/golden/goldSummaryTransDetails/GoldTransDetails.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
