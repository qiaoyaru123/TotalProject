<template>
  <div class="login">
    <div class="img">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
    </div>
    <div class="input">
      <div>
        <input type="text" v-model="mobile" />
      </div>
      <div>
        <input type="password" v-model="password" />
      </div>
      <div class="btn" @click="login">登录</div>
    </div>
    <Dialogs v-show="isShow" :title="title" :isShow="noneView" />
  </div>
</template>
<script lang="ts">
import { Login } from "../../server/index";
import Dialogs from "../../components/dialogs/index.vue";
export default {
  data() {
    return {
      mobile: "15818264086",
      password: "123456",
      isShow: false,
      title: ""
    };
  },
  components: {
    Dialogs
  },
  mounted() {
    // let data = await Login({
    //   old: 123
    // });
    // console.log(data);
  },
  methods: {
    async login() {
      if (!this.mobile) {
        this.showView();
        this.title = "请输入用户名";
      } else if (!this.password) {
        this.showView();
        this.title = "请输入密码";
      }
      let userInfo = <any>await Login({
        mobile: this.mobile,
        password: this.password
      });
      if (userInfo.errno === 0) {
        console.log(userInfo)
        this.$router.push("/home");
        window.localStorage.setItem("key", userInfo.data.sessionKey);
      } else {
        this.showView();
        this.title = "账户或密码不正确";
      }
    },
    showView() {
      this.isShow = true;
    },
    noneView() {
      this.isShow = false;
    }
  }
};
</script>
<style lang="scss">
@import url("./index.scss");
</style>
