<template>
<div class="asideContain">
    <div class="logo" @click="hide" :style="{
        opacity: ishidding * 100 +'%',
    }">
        <img src="@/assets/logo1.png">
    </div>
    <div class="title" :style="{
        opacity: !ishidding * 100 +'%',
    }">
          <router-link :to="{name:'Home'}">首页</router-link>
      </div>
  <div class="aside" @click="hide" :style="{
      marginLeft: -ishidding * 20 +'%',
      }">
      <div class="item" v-for="item in channels" :key="item.channelId" :class="{
          active: item.channelId == $route.params.id,
      }">
            <router-link :to="{
                name:'News',
                params:{
                    id: item.channelId,
                }
            }">
                {{item.name}}
            </router-link>
      </div>
  </div>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed:{
        ...mapState("channels",{
            channels: "data",
        }),
    },
    data(){
        return{
            ishidding: 1,
        }
    },
    methods:{
        hide(){
            if(this.ishidding == 1){
                this.ishidding = 0;
            }else{
                this.ishidding = 1;
            }
        }
    }
}
</script>

<style scoped>
    .asideContain{
        position: fixed;
    }
    .logo{
        position: absolute;
        transition: 1s;
        margin: 100px 50px;
    }
    .logo img{
        width: 42px;
        height: 42px;
    }
    .aside{
        height: 100vh;
        position: fixed;
        z-index: 200;
        overflow: scroll;
        transition: 1s;
    }
    .aside::-webkit-scrollbar{
        display:none;
    }
    .title{
        width: 15vw;
        background-color: #47607e;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 20px;
        cursor: pointer;
        transition: 1s;
    }
    .title a{
        line-height: 10vh;
        font-size: 40px;
        color: black;
    }
    .item{
        margin: 5px 0;
        width: 15vw;
        line-height: 5vh;
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: #beaa89;
        border-radius: 10px;
        cursor: pointer;
    }
    .item a{
        color: black;
        padding: 0 80px;
    }
    .item:hover{
        background-color: white;
    }
    .active{
        background-color: white;
    }
</style>