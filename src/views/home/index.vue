<template>
  <div class="home">
    <div class="m-home-box">
      <!-- 轮播 -->
<<<<<<< HEAD
      <Swipers :banner="banner" :imgName="imgName" />
      <div class="m-home-slide">
        <dl v-for="item in channel" :key="item.id" @click="funnyDetail(item.id)">
          <dt>
            <img v-lazy="item.icon_url" alt />
          </dt>
=======
    <Swipers :banner="banner" :imgName="imgName"/>
    <div class="m-home-slide">
        <dl v-for="item in channel" :key="item.id">
          <dt><img v-lazy="item.icon_url" alt=""></dt>
>>>>>>> b066ad801f8843f0766c7c1d30d27ab0776bed65
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
<<<<<<< HEAD
      <main class="m-home-main">
        <div class="m-home-main-banner">
          <h4>品牌制造商直供</h4>
          <div class="m-main-banner-img">
            <span
              v-for="item in img"
              :key="item.id"
              :style="{backgroundImage:`url(${item.new_pic_url})`}"
            >
              <i>{{item.name}}</i>
              <i>{{item.floor_price}}元起</i>
            </span>
          </div>
        </div>
        <div class="newGoodsBox">
          <h4>新品首发</h4>
          <div class="newGoodsItemBox">
            <dl class="newGoodsItem" v-for="item in newGoodsList" :key="item.id" @click="goodsDetail(item.id)">
              <dt>
                <img v-lazy="item.list_pic_url" />
              </dt>
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
            <dl class="recommendItem" v-for="item in hotGoodsList" :key="item.id" @click="goodsDetail(item.id)">
              <dt :style="{backgroundImage:`url(${item.list_pic_url})`}"></dt>
              <dd>
                <span>{{item.name}}</span>
                <span>{{item.goods_brief}}</span>
                <span>￥{{item.retail_price}}</span>
              </dd>
            </dl>
          </div>
        </div>
        <div class="topGoodsBox">
          <h4>专题精选</h4>
          <swiper :options="swiperOption" ref="Swiper" class="picSwiper">
            <swiper-slide v-for="item in topicList" :key="item.id">
              <img v-lazy="item.scene_pic_url" alt />
              <span>{{item.title}}</span>
              <span>{{item.subtitle}}</span>
            </swiper-slide>
          </swiper>
        </div>
        <div class="cateGoryBox" v-for="item in categoryList" :key="item.id">
          <h4>{{item.name}}</h4>
          <dl v-for="k in item.goodsList" :key="k.id" @click="goodsDetail(k.id)">
            <dt>
              <img v-lazy="k.list_pic_url" alt />
            </dt>
            <dd>
              <span>{{k.name}}</span>
              <span>￥{{k.retail_price}}</span>
            </dd>
          </dl>
          <dl class="more" >
            <dt> 加载更多</dt>
            <dd>
               <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg=="
                alt
              />
            </dd>
         </dl>
        </div>
      </main>
    </div>
    <Footer />
=======
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
>>>>>>> b066ad801f8843f0766c7c1d30d27ab0776bed65
  </div>
</template>
<script>
//引入组件
import Footer from "@/components/footer/index.vue";
<<<<<<< HEAD
import Swipers from "@/components/swiper/index.vue";
//数据
import { gethome } from "../../server/index";
import { mapState, mapMutations } from "vuex";
//引入swiper
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
=======
import Swipers from "@/components/swiper/index.vue"
//数据
import { gethome } from "../../server/index";
//引入swiper
import {mapState,mapMutations} from "vuex"
export default {
  props: {},
>>>>>>> b066ad801f8843f0766c7c1d30d27ab0776bed65
  data() {
    return {
      getall: [],
      swiperOption: {
<<<<<<< HEAD
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        loop: true,
        coverflowEffect: {
          rotate: 45,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      },
      imgName: "image_url",
      banner: [],
      channel: [],
      img: [],
      newGoodsList: [],
      hotGoodsList: [],
      topicList: [],
      categoryList: []
    };
  },

  components: {
    Footer,
    Swipers,
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState({
      list: state => state.getData.data
    })
  },
  async mounted() {
    let { data } = await gethome();
    this.banner = data.banner;
    this.channel = data.channel;
    this.img = data.brandList;
    this.newGoodsList = data.newGoodsList;
    this.hotGoodsList = data.hotGoodsList;
    this.topicList = data.topicList;
    this.categoryList = data.categoryList;
  },
  methods: {
    funnyDetail(id){
       this.$router.push({path:"/funny",query:{id}})
    },
    goodsDetail(id){
      this.$router.push({path:"/goodsDetail",query:{id}})
    }
=======
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
        
>>>>>>> b066ad801f8843f0766c7c1d30d27ab0776bed65
  }
};
</script>
<style lang="scss">
@import url("./index.scss");
</style>
