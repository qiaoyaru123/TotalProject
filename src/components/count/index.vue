<template>
  <div class="count">
    <span @click="handleAdd(count.count--)">-</span>
    <span>{{count.count}}</span>
    <span @click="handleAdd(count.count++)">+</span>
  </div>
</template>
<script>
export default {
  props: ['count'],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
      handleAdd(){
          
      }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.count {
  width: 100%;
  display: flex;
  height: 2rem;
  span {
    width: 4rem;
    height: 2rem;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 2rem;
  }
}
</style>