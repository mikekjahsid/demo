import Vue from 'vue';
import App from './App.vue';
import "./assets/style/global.css";
import "./assets/style/reset.css";
import router from "./routes/index";
import store from "@/store/index";
import  {login} from "@/services/loginService";

store.dispatch("channels/getData");

new Vue({
    render:(h) => h(App), 
    router,
    store,
}).$mount('#app')
