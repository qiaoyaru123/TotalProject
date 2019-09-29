<template>
  <div class="addsite">
    <MyHeader :title="title" :isShow="isShow" />
    <main class="m-addSite-main">
      <div>
        <input type="text" placeholder="姓名" v-model="name" />
      </div>
      <div>
        <input type="text" placeholder="点话号码" v-model="mobile" />
      </div>
      <div @click="setCityShow">
        <span>{{citys}}</span>/
        <span>{{district}}</span>/
        <span>{{country}}</span>
      </div>
      <div>
        <input type="text" placeholder="请输入详细地址" v-model="address" />
      </div>
      <div>
        <div @click="choice">
          设为默认地址
          <span class="radio">
            <i :style="{backgroundColor:color}"></i>
          </span>
        </div>
      </div>
    </main>
    <div class="m-addSite-button">
      <button @click="goBack">取消</button>
      <button @click="addUserSite">保存</button>
    </div>
    <Dialogs :Dtitle="message" :isShow="noneView" v-if="show" />
    <City :setCityShow="setCityShow" v-if="cityShow" />
  </div>
</template>

<script>
//引入组件
import MyHeader from "@/components/myHeader/index.vue";
import Dialogs from "@/components/dialogs/index.vue";
import City from "@/components/city";
//请求数据的方法
import { Site, addSite } from "@/server/index";

export default {
  name: "addSite",
  data() {
    return {
      //箭头
      isShow: false,
      //提示
      title: "新增地址",
      show: false,
      color: "",
      flag: false,
      name: "",
      city_id: "北京市",
      district_id: "3",
      country_id: "424",
      is_default: "",
      mobile: "",
      province_id: "",
      address: "",
      message: "",
      id: "",
      cityShow: false,
      citys: "北京市",
      district: "北京市",
      country: "东城区"
    };
  },
  mounted(){
    let {name,mobile,address}=this.$route.query;
    this.name=name;
    this.mobile=mobile;
    this.address=address;
},
  components: {
    MyHeader,
    Dialogs,
    City
  },
  methods: {
    choice() {
      this.flag = !this.flag;
      if (this.flag) {
        this.color = "#000";
      } else {
        this.color = "#fff";
      }
    },
    goBack() {
      this.$router.push("/mySite");
    },
    async addUserSite() {
      if (!this.name) {
        this.setAlert("请输入用户名");
      } else if (!this.mobile) {
        this.setAlert("请输入电话号码");
      } else if (!this.address) {
        this.setAlert("请输入详细地址");
      } else {
        if (!/^1[3456789]\d{9}$/.test(this.mobile))  return this.setAlert("号码格式不正确");
          let num =this.color==="#000"? 1 :0;
          console.log(num)
          let res = await addSite({
            name: this.name,
            mobile: this.mobile,
            address: this.address,
            id: this.id,
            country_id: this.country_id,
            city_id: this.city_id,
            district_id: this.district_id,
            is_default: num,
            province_id: this.province_id,
            user_id: this.user_id
          });
          if (res.errno === 0) {
            this.$router.push("/mySite");
          } else {
            this.setAlert("添加失败请检查你的网络");
          }
      }
    },
    setAlert(title) {
      this.showView();
      this.message = title;
    },
    showView() {
      this.show = true;
    },
    noneView() {
      this.show = false;
    },
    setCityShow(cityShow = false, city, district, country) {
      this.citys = city;
      this.district = district;
      this.country = country;
      this.cityShow = cityShow;
    }
  }
};
</script>

<style>
@import url("./index.scss");
</style>