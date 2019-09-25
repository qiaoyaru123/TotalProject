<template>
  <div class="home">
    <div class="wrap">
      <div class="swiper-container" >
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in getall.banner" :key="index">
                        <img src="item.image_url"/>
                    </div>
                   
                </div>
                 <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="nav">
      <dl v-for="(item,index) in getall.channel" :key="index">
        <dt>
          <img :src="item.icon_url" alt />
        </dt>
        <dd>{{item.name}}</dd>
      </dl>
    </div>

    <div class="cone">
      <!-- <h3>品牌制造商直供</h3>
            <div v-for="(item,index) in getall.brandList" :key="index" class="cons">
                <img :src="item.new_pic_url" alt="">
                <p>{{item.name}}</p>
                <h5>{{item.floor_price}}元起</h5>
      </div>--> 
    </div>

    <div class="cont">
      <!-- <h3>新品首发</h3>
            <div v-for="(item,index) in getall.brandList" :key="index" class="conts">
               <img :src="item.new_pic_url" alt="">
                <p>{{item.name}}</p>
                <h5>{{item.floor_price}}元起</h5> 
      </div>-->
    </div>

    <!-- <div class="peo">
      <h3>人气推荐</h3>
      <div class="zeo">
        <dl>
          <dt></dt>
          <dd></dd>
        </dl>
      </div>
    </div> -->
    <Foot />
  </div>
</template>
<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.min.css";
import { gethome } from "../../server/index";

export default {
  props: {},
  components: {},
  data() {
    return {
      getall: []
    };
  },
  computed: {},
  methods: {},
  created() {
    
  },
  async mounted() {
    let data = await gethome({});
    console.log(data.data);
    this.getall = data.data;
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      direction: "horizontal"
    });
  }
};
</script>
<style lang="scss">
// @import url('./index.scss');
* {
  width: 100%;
  height: 100%;
}
html{
  font-size: calc(100/750*100vm);
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  // max-width: 1200px;
  
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    max-width: 1200px;
    .wrap {
      width: 100%;
      height: 22rem;
      border-bottom: 1px solid #ccc;
      .swiper-container {
        width: 100%;
        height: 100%;
        // .swiper-slider {
        //   width: 100%;
        //   height: 100%;
        //   img {
        //     width: 100%;
        //     height: 100%;
        //   }
        // }
      }
    }
    .nav {
      width: 100%;
      height: 5rem;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-around;
      dl {
        width: 3rem;
        height: 3rem;
        display: flex;
        flex-direction: column;
        dt {
          width: 1.5rem;
          height: 1.5rem;
        }
        dd {
          width: 100%;
          height: 1rem;
          line-height: 2rem;
          margin-left: -1rem;
        }
      }
    }
    .cone {
      width: 100%;
      height: 100rem;
      // border-bottom: 1px solid #ccc;
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 2;
      background: red;
      margin-top: 5rem;
      h3 {
        height: 2rem;
        text-align: center;
      }
      .cons {
        width: 12rem;
        height: 7.5rem;
        border: 1px solid #ccc;
        img {
          height: 7.5rem;
        }
        p {
          position: absolute;
          margin-top: -7.8rem;
          margin-left: -9rem;
        }
        h5 {
          position: absolute;
          margin-top: -6rem;
          margin-left: -10rem;
          color: #ccc;
        }
      }
    }

    .cont {
      width: 100%;
      height: 100rem;
      border-bottom: 1px solid #ccc;
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 2;
      margin-top: 5rem;
      background: palegreen;
      h3 {
        height: 3rem;
      }
      .conts {
        width: 12rem;
        height: 7.5rem;
        border: 1px solid #ccc;
        img {
          height: 7.5rem;
        }
        p {
          position: absolute;
          margin-top: -7.8rem;
          margin-left: -9rem;
        }
        h5 {
          position: absolute;
          margin-top: -6rem;
          margin-left: -10rem;
          color: #ccc;
        }
      }
    }
    .peo {
      width: 100%;
      height:50rem ;
      
      background: palevioletred;
    }
  }
}
</style>