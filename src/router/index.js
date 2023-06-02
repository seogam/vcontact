import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "ContactPageList",
      paht: "/",
      component: () => import("@/pages/ContactPage/index.vue"),
      meta: { requiresAuth: true },
    },
    {
      name: "ContactPageItem",
      path: '/:id',
      component: () => import("@/pages/ContactPage/_id.vue"),
      meta: { requiresAuth: true }
    },
    {
      name: "ContactSingle",
      path: '/single/:id',
      component: () => import("@/pages/ContactPage/single.vue"),
      meta: { requiresAuth: true }
    },
    {
      name: "Error",
      path: "/:pathMatch(.*)*",
      meta: { requiresAuth: false },
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
}); 

// router.beforeEach(async (to, _, next) => {
// });

export default router;