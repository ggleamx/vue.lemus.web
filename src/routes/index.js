import { createRouter, createWebHistory } from "vue-router";
import { fetchPropiedades } from "@/composables/propertiesDataFetch.js";
import Home from "@/views/Home.vue";
import HomeSearch from "@/views/HomeSearch.vue";
import SingleNeighborhood from "@/views/SingleNeighborhood.vue";
import SinglePropertyView from "@/views/single-property/SinglePropertyView.vue";
import VirtualTours from "@/views/VirtualTours.vue";
import About from "@/views/About.vue";
import Faqs from "@/views/Faqs.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Buscar",
        name: "home-search",
        component: HomeSearch,
    },
    {
        path: "/Zonas/:neighborhood",
        name: "single-neighborhood",
        component: SingleNeighborhood,
        beforeEnter: (to, from, next) => {
            const zones = ["Norte", "Sur", "Este", "Oeste"];

            const route = to.params.neighborhood;

            let zoneExists = false;

            zones.forEach((zone) => {
                if (route == zone) zoneExists = true;
            });


            if (!zoneExists) return next('/error');
        },
    },
    {
        path: "/Zonas/:neighborhood/:propertyId",
        name: "single-property",
        component: SinglePropertyView,
        beforeEnter: async(to, from, next) => {
            const numPropiedad = to.params.propertyId;
            const req = await fetchPropiedades();

            if (req.ok) {

                const propiedades = req.payload;

                propiedades.forEach((property) => {
                    if (property.numPropiedad == numPropiedad) {
                        to.params.property = property;
                        next();
                    }
                });


                //Error por no encontrar una propiedad con ese numPropiedad. 200
                next('/error');

            } else {
                //Error del servidor. 501
                next('/error');
            }
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