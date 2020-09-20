//获取远程新闻和新闻类别的数据
import axios from "axios";
import {appCode} from "./config";


// 获取所有的新闻类别
export async function getNewsChannels(){
    var resp = await axios.get('http://ali-news.showapi.com/channelList',{
        headers:{
            Authorization: `APPCODE ${appCode}`,
        },
    })
    return resp.data.showapi_res_body.channelList;
}



//获取所有新闻
export async function getNews(channelId , page = 1 ,limit = 10){
    var resp = await axios.get('http://ali-news.showapi.com/newsList',{
        headers:{
            Authorization: `APPCODE ${appCode}`,
        },
        params:{
            channelId,
            page,
            maxResult: limit,
            needAllList:false,
            needContent: 1,
        }
    })
    return resp.data.showapi_res_body.pagebean;
}



