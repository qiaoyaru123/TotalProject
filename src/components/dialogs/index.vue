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
     }
  },
  data() {
   
  },
  mounted() {
   
  }
};
</script>
<style lang="scss">
  @import url("./index.scss");
</style>