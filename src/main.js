import "normalize.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "./assets/globals.css";

createApp(App).use(router).mount("#app");
