<template>
  <swiper :options="swiperOption" ref="mySwiper" class="wrap">
    <swiper-slide v-for="k in banner" :key="k.id">
      <img :src="k[imgName]" alt />
    </swiper-slide>
    <!-- Optional controls -->
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
//引入swiper
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "swipers",
   props: {
     banner:{
       type:Array
     },
     imgName:{
       type:String
     }
  },
  components:{
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: ".swiper-pagination",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false //操作swiper后不会停止播放
        },
        observer: true,
        observeParents: true
      }
    };
  }
};
</script>
<style scoped lang="scss">
@import url("./index.scss");
</style>