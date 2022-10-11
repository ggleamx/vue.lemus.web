import { createApp } from "vue";
import BootstrapVue3 from 'bootstrap-vue-3';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import App from "./App.vue";
import router from "./routes";

import "./assets/globals.css";
import "normalize.css";

console.warn = () => {}
createApp(App)
    .use(router)
    .use(BootstrapVue3)
    .mount("#app");