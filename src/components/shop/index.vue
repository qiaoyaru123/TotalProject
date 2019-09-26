<template>
  <div class="shop">
    <div class="head">
      <span @click="handleGo()"><</span>
      <span>简约执行</span>
    </div>
    <div class="nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in getData.gallery" :key="index">
            <img v-lazy="item.img_url" />
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <ul class="dem">
      <li>
        <span>☆</span>
        30天无忧退货
      </li>
      <li>
        <span>☆</span>
        48小时快递退款
      </li>
      <li>
        <span>☆</span>
        满88元免邮费
      </li>
    </ul>
    <div class="con">
      <h3>发达考试的计划</h3>
      <p>的积分可适当</p>
      <h2>${{getData.info.retail_price}}</h2>
      <span>WMF制造商</span>
    </div>
    <div class="xiao" @click="handleTan()">
      <span>X0</span>
      选择规格>
    </div>
    <div class="build">
      <h3>---商品参数---</h3>
      <ul class="box">
        <li v-for="(item,index) in getData.attribute" :key="index">
          <span>{{item.name}}</span>
          <span>{{item.value}}</span>
        </li>
      </ul>
    </div>
    <!-- ------------- -->
    <div class="remed">
      <dl v-for="(item,index) in getBom" :key="index">
        <dt>
          <img v-lazy="item.list_pic_url" />
        </dt>
        <dd>
          <p>{{item.name}}</p>
          <p>{{item.retail_price}}</p>
        </dd>
      </dl>
    </div>
    <div class="root">
      <div>☆</div>
      <div @click="handleTo()">
        <img src=".././../assets/shop.jpg" alt  class="img"/>
      </div>
      <button @click="handleOpen()">加入购物车</button>
      <button>立即购买</button>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.min.css";
import { mapState, mapMutations } from "vuex";
import {addShop} from '../../server/index';
export default {
  props: ["getData", "getBom"],
  components: {},
  data() {
    return {
      open
    };
  },
  computed: {
    ...mapState({
      flag: state => state.getData.flag
    })
  },
  methods: {
    ...mapMutations(["hanldeBen"]),
    handleGo() {
      this.$router.go(-1);
    },
    handleOpen() {
      this.hanldeBen();
      console.log(this.flag);
    },
    handleTan(){
      this.hanldeBen();
    },
    handleTo(){
      console.log(11111111111);
      // this.$router.push('/shop')
    }
  },
  created() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      direction: "horizontal"
    });
  },
  async mounted() {
    console.log(this._props.getData.info.goods_number)
    // console.log(this._props.getData.info.goods_number);
    // console.log(this._props.getData.info.primary_product_id);
    // console.log(this._props.getData.brand_id)
    let getAdd = await addShop({
      params:{
        goodsId:this._props.getData.info.primary_product_id,
        number:this._props.getData.info.goods_number,
        productId:this._props.getData.info.sell_volume
      }
    })
    console.log(getAdd)
  }
};
</script>
<style  lang="scss">
* {
  width: 100%;
  height: 100%;
}
html {
  font-size: calc(100 / 750 * 100vm);
}
html,
body {
  width: 100%;
  height: 100%;
}
.shop {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .head {
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid #ccc;
    text-align: center;
    line-height: 3rem;
    background: rgb(240, 238, 238);
    span {
      &:nth-child(1) {
        margin-left: -10rem;
      }
      &:nth-child(2) {
        margin-left: 8rem;
      }
    }
  }
  .nav {
    width: 100%;
    height: 23rem;
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-slide {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .swiper-pagination {
        width: 100%;
        height: 3rem;
        margin-top: 20rem;
      }
    }
  }
  .dem {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    margin-top: 2rem;
    li {
      line-height: 3rem;
      span {
        color: red;
      }
    }
  }
  .con {
    width: 100%;
    height: 8rem;
    border-bottom: 1p solid #ccc;
    margin-top: 2rem;
    h3 {
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
    }
    p {
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
    h2 {
      width: 100%;
      line-height: 3rem;
      text-align: center;
      color: red;
    }
    span {
      height: 3rem;
      border: 1px solid orange;
      line-height: 3rem;
      margin-left: 10rem;
    }
  }
  .xiao {
    height: 3rem;
    line-height: 3rem;
    margin-left: 17rem;
    span {
      color: red;
    }
  }
  .build {
    width: 100%;
    height: auto;
    h3 {
      width: 100%;
      height: 4rem;
      text-align: center;
      line-height: 4rem;
      color: aqua;
    }
    .box {
      width: 100%;
      li {
        width: 90%;
        height: auto;
        background: #ccc;
        margin: 0 auto;
        display: flex;
        line-height: 3.5rem;
        margin-top: 1rem;
        span {
          &:nth-child(1) {
            //   width:4rem;
            height: auto;
            color: rgb(70, 66, 66);
          }
          &:nth-child(2) {
            margin-left: 1rem;
            font-size: 1rem;
          }
        }
      }
    }
  }

  .remed {
    width: 100%;
    height: auto;
    display: flex;

    flex-wrap: wrap;
    flex-shrink: 2;
    justify-content: space-around;
    background: purple;
    dl {
      width: 48%;
      height: 10rem;
      dt {
        width: 100%;
        height: 6rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        width: 100%;
        p {
          width: 100%;
          height: 2rem;
          text-align: center;
        }
      }
    }
  }
  .root {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    font-size: 3rem;
    background: #fff;
      div:nth-child(1) {
        width: 4rem;
        height: 4rem;
        margin-left: 1rem;
      }
      div:nth-child(2) {
        width: 4rem;
        height: 4rem;
        .img{
          width: 4rem;
          height: 4rem;
        }
      }
     button {
      &:nth-child(1) {
        width: 22rem;
        height: 3.8rem;
        color: #fff;
        line-height: 3.8rem;
        text-align: center;
      }
      &:nth-child(2) {
        width: 22rem;
        height: 3.8rem;
        background: paleturquoise;
        color: #fff;
        line-height: 3.8rem;
        text-align: center;
      }
    }
  }
}
</style>