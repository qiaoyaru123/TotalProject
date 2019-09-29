<template>
  <div class="dialogs">{{Dtitle}}</div>
</template>
<script lang="ts">
export default {
  props: {
    Dtitle: {
      default: "",
      type: String
    },
    isShow: {
      type: Function
    }
  },
  mounted() {
    setTimeout(() => {
      this.isShow();
    }, 2000);
  }
};
</script>
<style lang="scss">
@import url("./index.scss");
</style>