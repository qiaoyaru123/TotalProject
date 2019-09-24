<template>
  <div class="dialogs">
        123
  </div>
</template>
<script lang="ts">
 export default {
  props:{
     title:{
          default:"",
          type:String,
     },
     isShow:{
        type:Function,
     }
  },
  mounted() {
    setTimeout(()=>{
      this.isShow()
    },1500)
  }
};
</script>
<style lang="scss">
  @import url("./index.scss");
</style>