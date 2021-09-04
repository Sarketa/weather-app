import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Rio from "../views/Rio.vue";
import Beijing from "../views/Beijing.vue";
import LosAngeles from "../views/LosAngeles.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/rio",
    name: "Rio",
    component: Rio,
  },
  {
    path: "/beijing",
    name: "Beijing",
    component: Beijing,
  },
  {
    path: "/losangeles",
    name: "LosAngeles",
    component: LosAngeles,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
