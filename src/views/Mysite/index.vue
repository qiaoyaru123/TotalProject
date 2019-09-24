<template>
  <div class="site">
      <MyHeader :title="title" :isShow="isShow"/>
        <main class="m-site-main">

        </main>
        <button class="button" @click="addsite">新建地址</button>
  </div>
</template>

<script>
//引入组件
import MyHeader from "@/components/myHeader/index.vue"
//请求数据的方法
import {Site} from "@/server/index"
export default {  
  name :"site",
  data(){
      return {
          //提示
          title:"地址管理",
          //显示箭头
          isShow:true
      }
  },
  components:{
      MyHeader
  },
 async mounted(){
   let data= await Site();
   console.log(data)
  },
  methods:{
     addsite(){
         this.$router.push("/addSite")
     }
  }
}
</script>

<style>
  @import url("./index.scss");
</style>