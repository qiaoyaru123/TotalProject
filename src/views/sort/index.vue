<template>
  <div class="classification">
    <div class="seachInput">
      <input type="text" placeholder="搜索商品，共239款好物" @click="handleSou()"/>
    </div>
    <div class="tab-container">
      <!-- 左侧点击列表 -->
      <div class="tab-list">
        <div
          v-for="(item,index) in sortall.categoryList"
          :key="index"
          @click="handletal(index)"
        >{{item.name}}</div>
      </div>
      <!-- 商品列表 -->
      <div class="tab-commodity">
        <div class="commodity-logo">
          <img 
         
          v-lazy="sortall.categoryList[ind].banner_url"/>
          <p>{{sortall.categoryList[ind].front_name}}</p>
        </div>
        <div class="categoryTitle">
          <div>——</div>
          <div>{{sortall.categoryList[ind].name}}分类</div>
          <div>——</div>
        </div>
        <div class="subCategory">
          <a
            href="#"
            v-for="(item,index) in dataTwo.subCategoryList"
            :key="index"
            @click="handletab({index,item})"
          >
            <img v-lazy="item.wap_banner_url"/>
            <div>{{item.name}}</div>
          </a>
        </div>
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import { sortall ,sortTwo,buildSearch} from "../../server/index";
export default {
  props: {},
  components: {},
  data() {
    return {
      sortall: [],
      ind: 0,
      id:'',
      dataTwo:[],
      searchdata:[]
    };
  },
  computed: {},
  methods: {
    handletal(ind) {
      this.ind = ind;
      this.id = this.sortall.categoryList[ind].id;
      console.log(this.id);
      this.getSort();
    },
    handletab(obj) {
      this.$router.push({
        path: "/sortxiang",
        query: obj
      });
    },
    handleSou(){
      this.$router.push({
        path:'/sortsearch',
        query:this.searchdata
      })
    },

  async  getSort(){
    //获取当前分类信息和子分类
    let dataTwos = await sortTwo({
      params:{id:this.id}
    });
    this.dataTwo = dataTwos.data.currentCategory;
  }
  },
  created() {},
  async mounted() {
    let data = await sortall({});
    this.sortall = data.data;
    console.log(this.sortall.categoryList[3]);

    //获取商品查询的相关信息
    let SouData= await buildSearch({

    })
    console.log(SouData.data);
    this.searchdata= SouData.data;

    //获取当前分类信息和子分类
    this.dataTwo = this.sortall.categoryList[0];
  }
};
</script>

<style lang="scss" scoped>
.classification {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .tab-container {
    width: 100%;
    height: 100%;
    display: flex;
    background: #fff;
    height: 100%;
    border-top: 2px solid #eee;
    .tab-commodity {
      width: 73%;
      overflow: scroll;
      .subCategory {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex-shrink: 2;
        padding: 0 5px 5px 5px;
        a {
          background: transparent;
          text-decoration: none;
          outline: none;
          width: 50%;
          img {
            width: 100%;
            padding: 5px;
            height: auto;
          }
          div {
            font-size: 14px;
            text-align: center;
            padding: 5px 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #333;
          }
        }
      }
      .categoryTitle {
        width: 100%;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          margin: 0 10px;
          font-size: 14px;
          color: #2196f3;
        }
      }
      .commodity-logo {
        width: 100%;
        height: 100px;
        position: relative;
        p {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
          color: white;
        }
        img {
          width: 100%;
          height: 100px;
        }
      }
    }
    .tab-list {
      width: 27%;
      height: auto;
      border-right: 2px solid #eee;
      div {
        width: 100%;
        height: 42px;
        text-align: center;
        line-height: 42px;
        font-size: 14px;
      }
    }
  }
  .seachInput {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    input {
      height: 28px;
      text-align: center;
      background: #eeeeee;
      color: #3333;
      width: 337px;
      border: 0;
      border-radius: 5px;
      font-size: 14px;
    }
  }
  .foot {
    width: 100%;
    height: 50px;
    background: #fff;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
  }
}
</style>