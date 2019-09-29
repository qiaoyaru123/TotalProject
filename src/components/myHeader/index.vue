<template>
  <header class="m-collect-header">
    <span @click="goMy">
      <b v-if="isShow"><</b>
    </span>
    <span>{{title}}</span>
    <span></span>
  </header>
</template>
<script>
export default {
  name: "myCollect",
  props: {
    title: {
      default: "",
      type: String
    },
    isShow: {
      default: false,
      type: Boolean
    },
    go:{
      default:-1,
    }
  },
  methods: {
    goMy() {
      console.log()
      if(typeof(this.go)==="string"){
         this.$router.push(this.go);
      }else{
       this.$router.go(this.go);
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import url("./index.scss");
</style>