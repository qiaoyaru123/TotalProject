<template>
  <div class="goodsDetali">
    <div class="m-goods-main">
      <Header :isShow="isShow" :title="info.name" />
      <Swipers :banner="banner" :imgName="imgName" />
      <div class="m-goods-title">
        <span>30天无忧退货</span>
        <span>48小时快速退款</span>
        <span>满88元免邮票</span>
      </div>
      <div class="m-goods-tab">
        <span>{{info.name}}</span>
        <span>{{info.goods_brief}}</span>
        <span>￥{{info.retail_price}}</span>
        <span>罗莱制造商</span>
        <span><i>X{{info.unit_price}}</i><b>选择规格></b></span>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
//引入组件
import Footer from "@/components/footer/index.vue";
import Swipers from "@/components/swiper/index.vue";
import Header from "@/components/myHeader/index.vue";
//数据
import { goodsDetail } from "@/server/index";

export default {
  data() {
    return {
      banner: [],
      imgName: "img_url",
      isShow: true,
      title: "123",
      info:{}
    };
  },

  components: {
    Swipers,
    Header,
    Footer
  },

  computed: {},

  async mounted() {
    let { id } = this.$route.query;
    try {
      let { data } = await goodsDetail({
        params: {
          id: id
        }
      });
      this.banner = data.gallery;
      this.info= data.info
    } catch (error) {
      console.error(error);
    }
  },

  methods: {}
};
</script>
<style lang="scss">
@import url("./index.scss");
</style>
