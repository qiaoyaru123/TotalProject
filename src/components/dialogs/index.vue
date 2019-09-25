<template>
  <div class="dialogs">
        {{title}}
  </div>
</template>
<script lang="ts">
import { Login } from "../../server/index";
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