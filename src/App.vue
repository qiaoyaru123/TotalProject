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
 * {
  margin: 0;
  padding: 0;
  list-style: none;
}
body,
html,
#app {
  width: 100%;
  height: 100%;
}
html{
    font-size: calc (100/750*100vw)
}
.foot{    
  height: 50px;
  background: #fff;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
}
</style>
