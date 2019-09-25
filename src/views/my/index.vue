<template>
  <div class="mystyle">
      <div class="m-user-info">
      <header class="header">
          <div class="icon"></div>
          <div class="m-user-data">
              <span>1594951555</span>
              <span>普通用户</span>
          </div>
      </header>
       <main>
           <div class="m-user-item">
               <span>icon</span>
               <span>我的收藏</span>
           </div>
       </main>  
       <button class="user-btn">退出登录</button>  
    </div>
    <Foot/>
  </div>
</template>

<script>

export default {
  data(){
      return {
        
      }
  },
  components:{
     
  }
}
</script>

<style>
 @import url("./index.scss");
</style>