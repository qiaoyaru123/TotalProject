<template>
  <div class="login">
    <div class="img">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
    </div>
    <div class="input">
      <div>
        <input type="text" v-model="username" />
      </div>
      <div>
        <input type="password" v-model="password" />
      </div>
      <div class="btn" @click="login">登录</div>
    </div>
    <Dialogs :title="title"/>
  </div>
</template>
<script lang="ts">
import { Login } from "../../server/index";
import Dialogs from "../../components/dialogs/index.vue"
export default {
  data() {
    return {
      username: "",
      password: "",
      isShow:false,
      title:""
    };
  },
  components:{
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
      console.log(this.username,this.password)
      if (!this.username) {
         this.title="用户名不正确";
      } else if (!this.password) {
        this.title="用户名密码不正确";
      } 
      let userInfo = await Login({});
      console.log(userInfo)
    }
  }
};
</script>
<style lang="scss">
@import url("./index.scss");
</style>
