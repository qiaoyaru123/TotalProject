<template>
  <div class="home">
    <div class="m-home-box">
      <!-- 轮播 -->
    <Swipers :banner="banner" :imgName="imgName"/>
    <div class="m-home-slide">
        <dl v-for="item in channel" :key="item.id">
          <dt><img v-lazy="item.icon_url" alt=""></dt>
          <dd>{{item.name}}</dd>
        </dl>
    </div>
    <main class="m-home-main">
      <div class="m-home-main-banner">
         <h4>品牌制造商直供</h4>
       <div class="m-main-banner-img">
        <span v-for="item in img" :key="item.id" :style="{backgroundImage:`url(${item.new_pic_url})`}">
          <i>{{item.name}}</i>
          <i>{{item.floor_price}}元起</i>
        </span>
       </div>
      </div>
      <div class="newGoodsBox">
         <h4>新品首发</h4>
          <div class="newGoodsItemBox">
             <dl class="newGoodsItem" v-for="item in newGoodsList" :key="item.id">
               <dt><img v-lazy="item.list_pic_url"/></dt>
               <dd>
                 <span>{{item.name}}</span>
                 <span>￥{{item.retail_price}}</span>
               </dd>
             </dl>
         </div> 
         </div>
          <div class="recommend">
          <h4>人气推荐</h4>
          <div class="recommendItemBox">
             <dl class="recommendItem" v-for="item in hotGoodsList" :key="item.id">
               <dt :style="{backgroundImage:`url(${item.list_pic_url})`}"></dt>
               <dd>
                 <span>{{item.name}}</span>
                 <span>{{item.goods_brief}}</span>
                 <span>￥{{item.retail_price}}</span>
               </dd>
             </dl>
         </div> 
         </div>
    </main>
   </div>
   <Footer/>
  </div>
</template>
<script>
//引入组件
import Footer from "@/components/footer/index.vue";
import Swipers from "@/components/swiper/index.vue"
//数据
import { gethome } from "../../server/index";
//引入swiper
import {mapState,mapMutations} from "vuex"
export default {
  props: {},
  data() {
    return {
      getall: [],
      swiperOption: {
        loop: true,
        pagination: ".swiper-pagination",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false //操作swiper后不会停止播放
        },
        observer: true,
        observeParents: true
      },
      imgName:"image_url",
      banner: [],
      channel:[],
      img:[],
      newGoodsList:[],
      hotGoodsList:[]

    };
  },
  components: {
    Footer,
    Swipers
  },
  computed:{
      ...mapState({
        list:state=>state.getData.data
      })       
  },
  async mounted() {
    let data = await gethome();
    this.banner = data.data.banner;
    console.log(data);
    this.channel=data.data.channel;
    this.img=data.data.brandList;
    this.newGoodsList=data.data.newGoodsList;
    this.hotGoodsList=data.data.hotGoodsList
  },
  methods: {
        
  }
};
</script>
<style lang="scss">
@import url("./index.scss");
</style>
