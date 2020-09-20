import Vue from "vue";
import vuex from "vuex";
import channels from "@/store/channels";
import news from "@/store/news";

Vue.use(vuex);
var store = new vuex.Store({
    modules:{
        channels,
        news,
    },
});

export default store;

