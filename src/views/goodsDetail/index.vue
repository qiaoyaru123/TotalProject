<template>
  <div class="goodsDetali">
    <Header :isShow="isShow" :title="info.name" />
    <div class="m-goods-main">
      <Swipers :banner="banner" :imgName="imgName" />
      <div class="m-goods-title">
        <span>★ 30天无忧退货</span>
        <span>★ 48小时快速退款</span>
        <span>★ 满88元免邮票</span>
      </div>
      <div class="m-goods-tab">
        <span>{{info.name}}</span>
        <span>{{info.goods_brief}}</span>
        <span>￥{{info.retail_price}}</span>
        <span>罗莱制造商</span>
        <span>
          <i>X{{info.unit_price}}</i>
          <b>选择规格></b>
        </span>
      </div>
      <div class="m-goods-titles">商品参数</div>
      <div class="m-goods-query">
        <div class="m-goods-t">常见问题</div>
        <div class="m-goods-i" v-for="item in issu" :key="item.id">
          <h4>√ {{item.question}}</h4>
          <p>{{item.answer}}</p>
        </div>
      </div>
      <div class="m-goods-commodity">
           <dl v-for="item in goodsRelateds" :key="item.id">
             <dt><img :src="item.list_pic_url" alt=""></dt>
             <dd>
               <span>{{item.name}}</span>
               <span>￥{{item.retail_price}}</span>
             </dd>
           </dl>
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
//store 
import {mapState,mapActions} from "vuex"
export default {
  data() {
    return {
      banner: [],
      imgName: "img_url",
      isShow: true,
      title: "123",
      info: {},
      issu: []
    };
  },

  components: {
    Swipers,
    Header,
    Footer
  },

  computed: {
    ...mapState({
       goodsRelateds: state => state.getData.goodsRelateds,
    })
  },

  async mounted() {
    let { id } = this.$route.query;
    try {
      let { data } = await goodsDetail({
        params: {
          id: id
        }
      });
      await this.getGoodsRelated({
        params: {
          id
        }
      })
      console.log(data);
      console.log(this.goodsRelateds,"111111111111")
      this.banner = data.gallery;
      this.info = data.info;
      this.issu = data.issue;
    } catch (error) {
      console.error(error);
    }
  },

  methods: {
     ...mapActions({
       getGoodsRelated:"getData/getGoodsRelated"
    })
  }
};
</script>
<style lang="scss">
@import url("./index.scss");
</style>
