<template>
  <footer class="footer">
    <dl>
      <router-link to="/home">
        <dt></dt>
        <dd>首页</dd>
      </router-link>
    </dl>
    <dl>
      <router-link to="/subject">
        <dt></dt>
        <dd>专题</dd>
      </router-link>
    </dl>
    <dl>
      <router-link to="/sort">
        <dt></dt>
        <dd>分类</dd>
      </router-link>
    </dl>
    <dl>
      <router-link to="/shop">
        <dt></dt>
        <dd>购物车</dd>
      </router-link>
    </dl>
    <dl>
      <router-link to="/my">
        <dt></dt>
        <dd>我的</dd>
      </router-link>
    </dl>
  </footer>
</template>
 
<script>
export default {
  name: "footerView",
  data() {
    return {};
  }
};
</script>

<style>
@import url("./index.scss");
</style>