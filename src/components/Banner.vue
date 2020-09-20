<template>
    <div class="banner-contenter" @mouseenter="autoStop" @mouseleave="autoStrat">
        <ul class="images" :style="{
            width:banners.length * 100 + '%',
            marginLeft:-index * 100 +'%',
        }" >
            <li v-for="(item,i) in banners" :key="i">
                <a :href="item.link"><img :src="item.url" ></a>
            </li>
        </ul>
        <ul class="dots">
            <li v-for="(item,i) in banners" :key="i" :class="{
                active: i === index,
            }"
            @click="index=i"
            ></li>
        </ul>
        <ul class="turn">
            <li class="left" @click="turnLeft">&lt</li>
            <li class="right" @click="turnRight">&gt</li>
        </ul>
    </div>
</template>
<script> 
export default {
props:{
    banners:{
        type: Array,         //属性类型
        required: true,     //必须要传递该属性
    }
},
created(){
    this.autoStrat();
},
destroyed(){
    this.autoStop();
},
data(){
    return{
        index: 0,   //当前现实的时第几张图片
        timer: null,
    }
},
methods:{
    //自动开始
    autoStrat(){
        if( this.timer ){
            return;
        }
        this.timer = setInterval(()=>{
            this.index = (this.index + 1) % this.banners.length;
        },2000);
    },
    //停止切换
    autoStop(){
        clearInterval(this.timer);
        this.timer = null;
    },
    turnLeft(){
        this.index--;
        if(this.index<0){
            this.index+=this.banners.length;
        }
    },
    turnRight(){
        this.index = (this.index + 1) % this.banners.length;
    },
}
}
</script>

<style scoped>
    .banner-contenter{
        width: 1080px;
        height: 360px;
        position: relative;
        overflow: hidden;
    }
    .banner-contenter .images{
        transition: 0.5s;
        height: 100%;   
        display: flex;
    }
    .banner-contenter .images li{
        list-style: none;
        width: 1080px;
        height: 360px;
    }
    .banner-contenter img{
        width: 100%;
        height: 100%;
    }
    .dots{
        position: absolute;
        display:flex;
        bottom: 5px;
        right: 0;;
    }
    .dots li{
        width: 10px;
        height: 10px;
        border: 1px solid white;
        border-radius: 50%;
        margin: 5px;
    }
    .active{
        width: 10px;
        height: 10px;
        background-color: white;
        border: 1px solid white;
        border-radius: 50%;
        margin: 5px;
    }
    .turn{
        width: 100%;
        position: absolute;
        top: 0;
        margin-top: 155px;
        display: flex;
        justify-content: space-between;
    }
    .turn li{
        cursor: pointer;
        height: 50px;
        line-height: 50px;
        font-size: 50px;
        font-weight: bolder;
        color:rgb(180, 161, 132);
    }
</style>