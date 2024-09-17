import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";

import App from "./App.vue";
import { i18n } from "./config/i18n";
import "./config/dayjs.config";
import "./style.css";

const app = createApp(App).use(VueQueryPlugin);

i18n(app).mount("#app");
