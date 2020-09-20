<template>
  <div class="pager">
      <a href="" class="pager-item" @click.prevent="change(1)"
       :class="{disabled: nowNumber === 1}">
          首页
      </a>
      <a href="" class="pager-item" @click.prevent="change(nowNumber - 1)"
       :class="{disabled: nowNumber === 1?true:false}">
          上一页
      </a>
        <a href="" class="pager-item" v-for="n in numberList" :key="n" 
        :class="{
            active:nowNumber === n
        }" @click.prevent="change(n)">
            {{n}}
        </a>
      <a href="" class="pager-item" @click.prevent="change(nowNumber + 1)">
          下一页
      </a>
      <a href="" class="pager-item" @click.prevent="change(pageNumber)">
          尾页
      </a>
      <span>
        <i>{{pageNumber}}</i>
        /
        <i>{{nowNumber}}</i>
      </span>
  </div>
</template>

<script>
export default {
    props:{
        pageNumber:{
            type: Number
        },
        nowNumber:{
            type: Number
        },
        displayNumber:{
            type: Number
        },
    },
    computed:{
        numberList(){
            var list = [];
            var final;
            var first;
            first = this.nowNumber - Math.ceil(this.displayNumber/2);
            if(first < 1){
                first = 1;
            }
            final = first + this.displayNumber - 1;
            if(final > this.pageNumber){
                final = this.pageNumber;
            }
            for(var i = first;i <= final;i++ ){
                list.push(i);
            }
            return list
        },
    }
    ,
    methods:{
        change(num){
            this.$emit("change",num);
        }
    }
}
</script>

<style scoped>
.pager {
  text-align: center;
  margin: 20px 0;
}

.pager .pager-item {
  display: inline-block;
  padding: 5px 7px;
  border: 1px solid #ccc;
  margin: 8px;
  cursor: pointer;
  color: rgb(96, 96, 224);
}

.pager .pager-item.disabled {
  color: #ccc;
  cursor: not-allowed;
}

.pager .pager-item.active {
  color: #f40;
  border: none;
  cursor: auto;
}
</style>