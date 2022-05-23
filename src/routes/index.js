import { createRouter, createWebHistory } from "vue-router";
import { fetchPropiedades } from "@/composables/propertiesDataFetch.js";
import Home from "@/views/Home.vue";
import HomeSearch from "@/views/HomeSearch.vue";
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
    path: "/Zonas/:neighborhood",
    name: "single-neighborhood",
    component: SingleNeighborhood,
    beforeEnter: (to, from) => {
      const zones = ["Norte", "Sur", "Este", "Oeste"];

      const route = to.params.neighborhood;

      let zoneExists = false;

      zones.forEach((zone) => {
        if (route == zone) zoneExists = true;
      });

      if (!zoneExists) return { path: "/error" };
    },
  },
  {
    path: "/Zonas/:neighborhood/:propertyId",
    name: "single-property",
    component: SingleProperty,
    beforeEnter: async (to, from) => {
      const route = to.params.propertyId;
      const req = await fetchPropiedades();

      if (req.ok) {
        let flag = false;

        const propiedades = req.payload;

        propiedades.forEach((property) => {
          if (property.numPropiedad == route) {
            flag = true;
            return;
          }
        });

        if (!flag)
          return {
            path: "/error",
          };
      }

      return;
    },
    props: true,
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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
