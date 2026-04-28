import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers";
import Aos from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router); // pasang router

app.mount("#app");

// Inisialisasi AOS setelah mount
Aos.init();
