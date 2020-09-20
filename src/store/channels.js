import { getNewsChannels } from "@/services/newsService";


export default{
    namespaced: true,
    state:{
            data: [],
    },
    mutations:{
        setData(state,payload){
            state.data = payload;
        },
    },
    actions:{
        async getData(context){
            var resp = await getNewsChannels();
            context.commit("setData",resp);
        },
    },
}