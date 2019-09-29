<template>
  <div class="funny">
    <Header :title="title" :isShow="isShow" />
    <div class="qud">
      <swiper :options="swiperOption" ref="SwiperSlite" class="picSwiper">
        <swiper-slide v-for="item in navData" :key="item.id">{{item.name}}</swiper-slide>
      </swiper>
    </div>
    <div class="m-funny-main">
      <div class="m-funny-title">
        <div>{{currentCategory.front_desc}}</div>
        <div>{{currentCategory.front_name}}</div>
      </div>
      <div class="m-funny-item" v-for="item in goodsLists" :key="item.id">
        <span>
          <img :src="item.list_pic_url" alt />
        </span>
        <span>{{item.name}}</span>
        <span>￥{{item.retail_price}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { sortNav, sortChild } from "@/server/index";
// 引入组件
import Header from "@/components/myHeader/index.vue";
//swiper
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
//仓库
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: {},
  components: {
    Header,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5
      },
      title: "奇趣分类",
      isShow: true,
      id: "",
      data: [],
      dataChild: [],
      selectedId: 0,
      items: [],
      options: {
        activeColor: "#1d98bd"
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      ind: 0
    };
  },
  computed: {
    ...mapState({
      navData: state => state.getData.navData,
      brotherCategory: state => state.getData.brotherCategory,
      currentCategory: state => state.getData.currentCategory,
      goodsLists: state => state.getData.goodsLists
    })
  },
  methods: {
    ...mapActions({
      getNavData: "getData/getNavData",
      getGoodsList: "getData/getGoodsList"
    }),
    goshop(obj) {
      this.$router.push({
        path: "/sortshop",
        query: obj
      });
    },
    handleChange() {
      this.ids = this.data.brotherCategory[this.selectedId].id;
      this.handleGetChange();
    },
    async handleGetChange() {
      // 导航下的子元素
      let dataChild = await sortChild({
        params: { categoryId: this.ids }
      });
      console.log(dataChild.data.data);
      this.dataChild = dataChild.data.data;
    }
  },
  async mounted() {
    console.log(this.$route.query.id);
    let id = this.$route.query.id;
    await this.getNavData({
      params: {
        id
      }
    });
    console.log(this.brotherCategory, this.goodsLists);
    await this.getGoodsList({
      page: 1,
      size: 1000,
      categoryId: this.currentCategory.id
    });
  }
};
</script>
<style lang="scss">
html {
  font-size: calc(100 / 750 * 100vw);
}
.funny {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  // .head {
  //   width: 100%;
  //   height: 0.5rem;
  //   text-align: center;
  //   border-bottom: 1px solid #ccc;
  //   line-height: 3rem;
  //   span {
  //     position: absolute;
  //     margin-left: -16rem;
  //   }
  // }
  .qud {
    width: 100%;
    height: 0.8rem;
    .swiper-container {
      height: .8rem;
      width: 100%;
    }
    .swiper-wrapper {
      width: 100%;
      text-align: center;
      line-height: 0.8rem;
    }
  }
  .m-funny-main {
    width: 100%;
    flex: 1;
    overflow: auto;
  }
  .m-funny-title {
    width: 100%;
    background: #ccc;
    text-align: center;
    padding-top: 0.3rem;
    line-height: 0.5rem;
    font-size: 14px;
    div:nth-child(2) {
      color: gray;
      font-size: 13px;
    }
  }
  .m-funny-item span {
    display: block;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .m-funny-item span:nth-child(3) {
    color: red;
  }
  .m-funny-item {
    width: 50%;
    display: inline-block;
  }
  .m-funny-item img {
    width: 100%;
  }
}
</style>