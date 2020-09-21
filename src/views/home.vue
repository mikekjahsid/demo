<template>

<div  style="width: 1080px; margin: 0 auto;">
      <Banner :banners='banners' />
      <Channels @change="getNews" />
      <loading v-show="isLoading" />
      <newsList v-show="!isLoading" :newsList="newsLists" />
       <Pager :pageNumber=pageNumber :nowNumber=nowNumber 
            :displayNumber=displayNumber   @change="handleNumber"/>
</div>
</template>

<script>
import Banner from '@/components/Banner';
import Channels from '@/components/news/Channels';
import newsList from '@/components/news/newsList';
import loading from '@/components/loading';
import center from '@/components/center';
import Pager from "@/components/Pager";
import { getNews } from '@/services/newsService';
import { mapState } from 'vuex';
export default {
components:{
    Channels,
    Banner,
    newsList,
    loading,
    Pager,
},
computed:{
  ...mapState("news",{
    newsLists: "data",
    isLoading: "isLoading",
    pageNumber: "allPage",
  }),
},
methods:{
  getNews(id){
    this.nowId = id;
  },
  handleNumber(num){
      if(num<1){
          this.nowNumber = 1;
          return;
      }else if(num > this.pageNumber){
          this.nowNumber = this.pageNumber;
          return;
      }
      if(this.nowNumber === num){
          return;
      }
      this.nowNumber = num;
},
},
data(){
  return{
    banners:[
      {link:'https://www.baidu.com',url:require('@/assets/banners/1.jpg') },
      {link:'https://www.baidu.com',url:require('@/assets/banners/2.jpg') },
      {link:'https://www.baidu.com',url:require('@/assets/banners/3.jpg') },
      {link:'https://www.baidu.com',url:require('@/assets/banners/4.jpg') },
    ],
    nowNumber : 1,
    displayNumber: 10,
    nowId: "",

  }
},
created(){
    this.$store.dispatch("news/getData",[this.nowId,this.nowNumber,this.displayNumber]);
},
watch:{
    nowNumber(){
      this.$store.dispatch("news/getData",[this.nowId,this.nowNumber,this.displayNumber]);
    },
    nowId:{
      immediate: true,
      handler(){
        this.$store.dispatch("news/getData",[this.nowId,this.nowNumber,this.displayNumber]);
      },
    }
},
}
</script>

<style>
</style>