<template>
    <div>
        <div class="type-title">
            {{channelName}}
        </div>
        <loading v-if="isLoading"/>
        <newsList v-else :newsList="newsLists" />
        <Pager :pageNumber=pageNumber :nowNumber=nowNumber 
            :displayNumber=displayNumber   @change="handleNumber"/>
    </div>
    
</template>

<script>
import loading from "@/components/loading";
import newsList from '@/components/news/newsList';
import Pager from "@/components/Pager";
import { mapState } from "vuex";
export default {
    components:{
        newsList,
        loading,
        Pager,
    },
    data(){
        return{
            nowNumber : 1,
            displayNumber: 10,
            channelName: '',
        }
    },
    computed:{
        ...mapState("news",{
            newsLists: "data",
            isLoading: "isLoading",
            pageNumber: "allPage",
        }),
    },
    methods:{
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
    created(){
        this.$store.dispatch("news/getData",[
            this.$route.params.id,
            this.nowNumber,
            this.displayNumber
        ]);
    },
    watch:{
        nowNumber(){
            this.$store.dispatch("news/getData",[
                this.$route.params.id,
                this.nowNumber,
                this.displayNumber
            ])
        },
        "$route.params.id":{
            immediate: true,
            handler(){
                this.$store.dispatch("news/getData",[
                    this.$route.params.id,
                    this.nowNumber,
                    this.displayNumber
                ])
            }
        },
        newsLists(){
                this.channelName = this.newsLists[0].channelName;
        }
    }
}
</script>

<style>
    .type-title {
    font-size: 2em;
    color: #888;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    }
</style>