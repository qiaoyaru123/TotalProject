<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>
 <script>
 //刷新页面
  export default{
    name:"app",
    provide(){
      return {
        reload:this.reload
      }
    },
    data(){
      return {
        isRouterAlive:true
      }
    },
    methods:{
      reload(){
        this.isRouterAlive=false;
        this.$nextTick(function(){
          this.isRouterAlive=true
        })
      }
    }
  }
 </script>
<style lang="scss">
  @import url("./App.scss");
</style>
