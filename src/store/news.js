import { getNews } from "@/services/newsService";

export default{
    namespaced: true,
    state:{
        data: [],
        isLoading: false,
        allPage: 0,
    },
    mutations:{
        setData(state,payload){
            state.data = payload;
        },
        setIsLoading(state,payload){
            state.isLoading = payload;
        },
        setAllPage(state,payload){
            state.allPage = payload;
        }
    },
    actions:{
        async getData(context,list){
            context.commit("setIsLoading",true);
            var resp = await getNews(list[0],list[1],list[2]);
            context.commit("setAllPage",resp.allPages)
            context.commit("setData",resp.contentlist);
            context.commit("setIsLoading",false);
        }
    },
}