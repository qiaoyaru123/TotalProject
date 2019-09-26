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
    }
  },
  methods: {
    goMy() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped lang="scss">
@import url("./index.scss");
</style>