<template>
  <div class="site">
    <MyHeader :title="title" :isShow="isShow" />
    <div class="m-site-img"></div>
    <main class="m-site-main">
      <dl v-for="(item,index) in data" :key="index" @click="goAddSite(item)">
        <dt>{{item.name}}</dt>
        <dd>
          <span>{{item.mobile}}</span>
          <span class="m-item-col">{{item.address}}</span>
        </dd>
        <dd class="m-site-back">
          <img
            @click="detailSiteFn(item.id)"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEVmZmZtbW1ubm5wcHCJiYmKioqOjo6Tk5OUlJSVlZXm5ubn5+fv7+/y8vL////PAON/AAAAa0lEQVQ4y2N4hwsw0F8mgIGBgRWrDAMIoMokMKADNoIy6O5gwCAHgUwoThkGEmWexiFTyDIP+JCpUZmBkXnqh0wRH9shA5dGBe4hSbxlRJJpqEGSOcmBJLMYJS9aIcm8noQkobluoModNAAADGfUnhuYO1kAAAAASUVORK5CYII="
            alt
          />
        </dd>
      </dl>
    </main>
    <button class="button" @click="addsite">新建地址</button>
    <div class="m-site-wrap" v-show="isWrap">
      <div class="m-site-wrap-box">
        <div>确定删除此地址吗？</div>
        <div>
          <button @click="setWrapNone('no')">取消</button>
          <button @click="setWrapNone('yes')">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件
import MyHeader from "@/components/myHeader/index.vue";
//请求数据的方法
import { Site } from "@/server/index";
import { deleteSite } from "@/server/index";
export default {
  inject:["reload"],
  name: "site",
  data() {
    return {
      //提示
      title: "地址管理",
      //显示箭头
      isShow: true,
      data: [],
      isWrap: false,
      id:""
    };
  },
  provide(){
     return {
       reload:this.reload
     }
  },
  components: {
    MyHeader
  },
  async mounted() {
    let data = await Site();
    this.data = data.data;
  },
  methods: {
    addsite() {
      this.$router.push("/addSite");
    },
    async detailSiteFn(id) {
      this.isWrap = true;
      this.id =id
    },
    async setWrapNone($hint) {
      if ($hint === "yes") {
        this.isWrap = false;
        let res = await deleteSite({
          id:this.id
        });
        this.reload()
      } else if ($hint === "no") {
        this.isWrap = false;
        return false;
      }
    },
    goAddSite(data){
      let name=data.name;
      let mobile=data.mobile
      let address=data.address
      this.$router.push({path:"/addSite",query:{name,mobile,address}})
    }
  }
};
</script>

<style>
@import url("./index.scss");
</style>