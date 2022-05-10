import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import HomeSearch from "@/views/HomeSearch.vue";
import Neighborhoods from "@/views/Neighborhoods.vue";
import SingleNeighborhood from "@/views/SingleNeighborhood.vue";
import SingleProperty from "@/views/SingleProperty.vue";
import VirtualTours from "@/views/VirtualTours.vue";
import About from "@/views/About.vue";
import Faqs from "@/views/Faqs.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: "/Buscar",
    name: "home-search",
    component: HomeSearch,
  },
  {
    path: "/Zonas",
    name: "neighborhoods",
    component: Neighborhoods,
    redirect: "/Buscar",
  },
  {
    path: "/Zonas/:neighborhood",
    name: "single-neighborhood",
    component: SingleNeighborhood,
  },
  {
    path: "/Zonas/:neighborhood/:propertyId",
    name: "single-property",
    component: SingleProperty,
  },
  {
    path: "/VRtours",
    name: "virtual-tours",
    component: VirtualTours,
  },

  {
    path: "/About",
    name: "about-us",
    component: About,
  },
  {
    path: "/FAQ",
    name: "faqs",
    component: Faqs,
  },
  // 404's
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },/*
  {
    path: "/Zonas/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  }*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
