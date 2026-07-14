import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/pages/Top/Top.vue"),
    },
    {
      path: "/calendar",
      component: () => import("../components/pages/Calendar/Calendar.vue"),
    },
    {
      path: "/task/create",
      component: () => import("../components/pages/TaskCreate/TaskCreate.vue"),
      props: (route) => ({ date: route.query.date }),
    },
    {
      path: "/task/:id/edit",
      component: () => import("../components/pages/TaskIdEdit/TaskIdEdit.vue"),
      props: true,
    },
    {
      path: "/task/:id",
      component: () => import("../components/pages/TaskId/TaskId.vue"),
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../components/pages/NotFound/NotFound.vue"),
    },
  ],
})
