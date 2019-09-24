<template>
  <div class="addsite">
    <MyHeader :title="title" :isShow="isShow" />
    <main class="m-addSite-main">
      <div>
        <input type="text" placeholder="姓名" v-model="name"/>
      </div>
      <div>
        <input type="text" placeholder="点话号码" />
      </div>
      <div>
        <span>111</span>/
        <span>222</span>/
        <span>3333</span>
      </div>
      <div>
        <input type="text" placeholder="点话号码" />
      </div>
      <div>
        <span class="radio" @click="choice">
          <i :style="{backgroundColor:color}"></i>
        </span> 设为默认地址
      </div>
    </main>
    <div class="m-addSite-button">
      <button>取消</button>
      <button>保存</button>
    </div>
  </div>
</template>

<script>
//引入组件
import MyHeader from "@/components/myHeader/index.vue";
//请求数据的方法
import { Site } from "@/server/index";
export default {
  name: "addSite",
  data() {
    return {
      //箭头
      isShow: false,
      //提示
      title: "新增地址",
      color: "",
      flag: false,
      name:"",
      te:"",
      city_id:"",
      district_id:"",
      is_default:"",
      mobile:"",
      province_id:"",
      address:""
    };
  },
  components: {
    MyHeader
  },
  methods: {
    choice() {
      this.flag = !this.flag;
      if (this.flag) {
        this.color = "#000";
      } else {
        this.color = "#fff";
      }
    }
  }
};
</script>

<style>
@import url("./index.scss");
</style>