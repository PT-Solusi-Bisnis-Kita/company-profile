import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "../Layouts/MainLayout.vue";
import index from "../pages/index.vue";
import About from "../pages/About.vue";
import Services from "../pages/Services.vue";
import Pricing from "../pages/Pricing.vue";
import Contact from "../pages/Contact.vue";
import Strategic from "../pages/Strategic.vue";
const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: index,
      },
      {
        path: "about",
        component: About,
      },
      {
        path: "services",
        component: Services,
      },
      {
        path: "pricing",
        component: Pricing,
      },
      {
        path: "contact",
        component: Contact,
      },
      {
        path: "strategic",
        component: Strategic,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

export default router;
