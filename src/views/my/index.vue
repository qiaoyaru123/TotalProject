<template>
  <div class="mystyle">
    <div class="m-user-info">
      <header class="header">
        <div class="icon"></div>
        <div class="m-user-data">
          <span>{{user}}</span>
          <span>普通用户</span>
        </div>
      </header>
      <main class="main">
        <div class="m-user-item" v-for="(item,index) in data" :key="index" @click="myDetail(index)">
          <span>
            <img :src="item.icon" alt />
          </span>
          <span :style="{color:`${item.color}`}">{{item.title}}</span>
        </div>
      </main>
      <button class="user-btn" @click="upLogin">退出登录</button>
      <Dialogs v-if="isShow" :Dtitle="title" :isShow="noneView"/>
    </div>
    <Footer />
  </div>
</template>

<script>
//引入组件
import Footer from "@/components/footer/index.vue";
import Dialogs from "@/components/dialogs/index.vue"
import { user } from "@/server/index";
export default {
  data() {
    return {
      user: "",
      title:"功能未完善",
      isShow:false,
      data: [
        {
          icon:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2143316675,1794448308&fm=26&gp=0.jpg",
          title: "我的收藏",
          color: "#2196F3"
        },
        {
          icon:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1361303408,2416109713&fm=26&gp=0.jpg",
          title: "地址管理",
          color: "#2196F3"
        },
        {
          icon:
            "https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=2434921445,59826179&fm=85&s=28237532FBA164092CFF80470300A0EA",
          title: "我的订单",
          color: "#000"
        },
        {
          icon:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4120155863,2033920388&fm=26&gp=0.jpg",
          title: "周末拼单",
          color: "#000"
        },
        {
          icon:
            "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1649867085,2516833143&fm=58&bpow=400&bpoh=400",
          title: "优惠券",
          color: "#000"
        },
        {
          icon:
            "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3842114122,2984541175&fm=85&app=79&f=JPEG?w=121&h=75&s=8ECBB75AD500ED11C06A2E52030010F6",
          title: "优选购",
          color: "#000"
        },
        {
          icon:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3612497357,4151201518&fm=26&gp=0.jpg",
          title: "我的红包",
          color: "#000"
        },
        {
          icon:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=290419016,2373917136&fm=26&gp=0.jpg",
          title: "会员plus",
          color: "#000"
        },
        {
          icon:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2528868624,4208788284&fm=26&gp=0.jpg",
          title: "邀请返利",
          color: "#000"
        },
        {
          icon:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282313719,2156049888&fm=26&gp=0.jpg",
          title: "意见反馈",
          color: "#000"
        },
        {
          icon:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569303684958&di=dbd0bc97f3b2e15cd7ae20a4978beb55&imgtype=0&src=http%3A%2F%2Fd.yymoban.com%2Fuploads%2Fallimg%2F1711%2F1-1G115112133336.png",
          title: "客服咨询",
          color: "#000"
        },
        {
          icon:
            "https://t7.baidu.com/it/u=2433685839,644745122&fm=191&app=48&size=h300&n=0&g=4n&f=JPEG?sec=1853310920&t=73d0cf7a948f7499d6930682dfe96e85",
          title: "账户安全",
          color: "#000"
        }
      ]
    };
  },
  components: {
    Footer,
    Dialogs
  },
  async mounted() {
    let user = window.localStorage.getItem("user");
    this.user = user;
  },
  methods: {
    upLogin() {
      window.localStorage.removeItem("x-nideshop-token", "");
      window.localStorage.removeItem("user");
      this.$router.push("login");
    },
    myDetail($index) {
      if ($index === 0) {
        this.$router.push("/myCollect");
      } else if ($index === 1) {
        this.$router.push("/mySite");
      } else {
        this.showView()
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

<style>
@import url("./index.scss");
</style>