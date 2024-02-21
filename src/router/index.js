import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/dashboard/product",
      name: "revenue",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/dashboard/costumer",
      name: "costumer",
      component: () => import("../views/CostumerView.vue"),
    },
    {
      path: "/dashboard/order",
      name: "order",
      component: () => import("../views/OrderView.vue"),
    },
    {
      path: "/dashboard/coupon",
      name: "coupon",
      component: () => import("../views/CouponView.vue"),
    },
    {
      path: "/dashboard/refund",
      name: "refund",
      component: () => import("../views/RefundView.vue"),
    },
    {
      path: "/dashboard/notification",
      name: "notification",
      component: () => import("../views/NotificationView.vue"),
    },
  ],
});

export default router;
