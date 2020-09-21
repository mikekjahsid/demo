<template>
<div id="app">
  <!-- <Header /> -->
  <Aside />
  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Header from "@/components/Header";
import Aside from "@/components/Aside";
export default{
  components:{
    Header,
    Aside,
  },
  }
</script>

<style scoped>
.container{
  margin: 20px auto;
}
</style>
