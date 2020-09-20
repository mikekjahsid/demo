<template>
    <div class="news-types">
      <div class="item" v-for="item in showChannels" :key="item.channelId" :class="{
        active: chooseId === item.channelId
      }" 
      @click="switchTo(item.channelId)">
        {{item.name}}
      </div>
      <a href="" @click.prevent="isFold = !isFold">{{isFold?"展开":"收起"}}</a>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
data(){
  return{
    chooseId: null,
    isFold: true,
  }
},
computed:{
  ...mapState("channels",{
    channels:"data",
  }),
  showChannels(){
    if(this.isFold){
      return this.channels.slice(0,9);
    }else{
      return this.channels;
    }
  }
},
methods:{
  switchTo(id) {
    this.chooseId = id;
    this.$emit("change",this.chooseId);
  },
},
watch:{
  channels(){
      this.switchTo (this.channels[0].channelId);
  }
},
}

</script>

<style scoped>
.news-types {
  margin: 30px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;                                             
  padding-bottom: 15px;
}
.item {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 15px;
  margin: 7px 15px 7px 0;
  cursor: pointer;
  position: relative;
}
.item:hover {
  background: #ccc;
}
.item.active {
  background: #000;
  color: #fff;
}
.news-types a {
  align-self: flex-end;
  margin-bottom: 20px;
  color: #409eff;
}
</style>