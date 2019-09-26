<template>
  <div class="m-city">
    <div class="m-city-box">
      <van-area
        :area-list="areaList"
        title="请选择地址"
        :value="code"
        @confirm="onAddrConfirm"
        @cancel="shut"
        @change="chenge"
      />  
    </div>
  </div>
</template>

<script>
import data from "./data.ts";

export default {
  name: "city",
   props:{
   setCityShow:{
      type:Function
   }
  },
  data() {
    return {
      areaList: {},
      code:"110000",
      val:[]
    }
  },
  mounted() {
    this.areaList =data;
  },
  methods:{
    onAddrConfirm(){
      let city="北京市";
      let district="北京市";
      let country="东城区";
      this.val && this.val.forEach((item,index)=>{
        if(index===0){
              city=item.name
        }else if(index===1){
             district=item.name
        }else if(index===2){
              country=item.name
        }
      })
   
      this.setCityShow(false,city,district,country)
    },
    shut(){
      this.setCityShow(false)
    },
    chenge(picker){
     let val=picker.getValues();
     this.val=val
    }
  }
};
</script>

<style>
@import url("./index.scss");
</style>