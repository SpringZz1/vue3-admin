import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
// 重设样式
import "@/styles/global.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
