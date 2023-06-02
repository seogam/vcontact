import { createRouter, createWebHistory } from "vue-router"
import ContactList from "@/pages/ContactPage/index.vue"
import ContactItem from "@/pages/ContactPage/_id.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "ContactPageList",
      paht: "/",
      component: ContactList,
      meta: { requiresAuth: true },
    },
    {
      name: "ContactPageItem",
      path: '/:id',
      component: ContactItem,
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