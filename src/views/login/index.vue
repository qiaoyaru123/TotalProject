<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import {Login} from "../../server/index"
   export default {
     data(){
       return {

       }
     },
    async mounted(){
   let data= await  Login({
         old:123
       })
       console.log(data)
     }
   }
</script>
<style lang="scss">

</style>
