import { createRouter, createWebHistory } from "vue-router"
import TokenService from "@/services/token.service"

import ContactList from "@/pages/ContactPage/index.vue"
import ContactItem from "@/pages/ContactPage/_id.vue"
import ContactAdd from "@/pages/ContactPage/add.vue"
import LoginPage from "@/pages/LoginPage.vue"

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
      name: "ContactPageAdd",
      path: '/add',
      component: ContactAdd,
      meta: { requiresAuth: true }
    },
    {
      name: "LoginPage",
      path: '/login',
      component: LoginPage,
      // meta: { requiresAuth: false }
    },
    {
      name: "Error",
      path: "/:pathMatch(.*)*",
      meta: { requiresAuth: false },
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
}); 

router.beforeEach((to, from, next) => {
  const accessToken = TokenService.getAccessToken();
  if (to.name !== 'LoginPage' && !accessToken) next({ name: 'LoginPage' })
  else next()
})

export default router;