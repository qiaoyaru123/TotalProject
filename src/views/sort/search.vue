<template>
  <div class="search">
    <div class="head">
      <p @click="handleGo()"><</p>
      <div>
        <input value :placeholder="defaultKeyword.keyword" name v-model="val" @keyup="handleChange" />
      </div>
      <p>取消</p>
      <div class="punt" v-show="open" @click="handleDian()">{{tanData[0]}}</div>
    </div>
    <div class="history" v-show="opens">
      <div class="top">
        <span>历史记录</span>
        <span></span>
      </div>
      <div class="bom">
        <span v-for="(item,index) in historyKeywordList" :key="index">{{item}}</span>
      </div>
    </div>
    <div class="hot" v-show="opens">
      <div class="top">
        <span>热门搜索</span>
      </div>
      <div class="bom">
        <span v-for="(item,index) in hotKeywordList" :key="index" @click="handleHot(item)">{{item.keyword}}</span>
      </div>
    </div>
    <div class="demo" v-show="ben">
        <ul class="met">
          <li>综合</li>
          <li @click="handleSort()">价格v</li>
          <li>全部分类</li>
        </ul>
        <div class="quert">
          <dl v-for="(item,index) in bomData.data" :key="index">
            <dt>
              <img v-lazy="item.list_pic_url"/>
            </dt>
            <dd>
              <p>{{item.name}}</p>
              <p>￥{{item.retail_price}}元</p>
            </dd>
          </dl>
        </div>
    </div>
  </div>
</template>
<script>
import { searchPage, sortChild } from "../../server/index";
export default {
  props: {},
  components: {},
  data() {
    return {
      defaultKeyword: "",
      historyKeywordList: "",
      hotKeywordList: "",
      val: "",
      open: false,
      tanData:'',
      ben:false,
      opens:true,
      bomData:[]
    };
  },
  computed: {},
  methods: {
    handleChange(e) {
      if (this.val.length > 0) {
        this.open = true;
        this.opens = false
      }
      this.getSearch();
      if (e.keyCode == 13) {
        this.getSerData();
      }
    },
    handleGo() {
      this.$router.go(-1);
    },
    handleDian(){
        this.getSerData();
        this.ben=true;   
        this.open = false; 
    },
    //热门搜索
    handleHot(item){
      console.log(item.keyword);
      let val = item.keyword;
      this.getHot(val);
      this.opens = false;
      this.ben = true;
      
    },
    //热门数据
    async getHot(val){
      let getSearch = await sortChild({
        keyword:val,
        page:1,
        size:100,
        sort:"id",
        order:"desc"
      })
      console.log(getSearch.data.data);
      this.bomData = getSearch.data;
    },
    //排序：
    async handleSort(){
      let getSearch = await sortChild({
        keyword: this.val,
        sort:"price",
        order:"asc",
        page:1,
        size:100
      });
      this.bomData = getSearch.data;
    },
    async getSearch() {
      let getPage = await searchPage({
        params: { keyword: this.val }
      });
      this.tanData = getPage.data;
    },
    async getSerData() {
      let getSearch = await sortChild({
        params: { keyword: this.val }
      });
      this.bomData = getSearch.data;
    }
  },
  created() {
    this.defaultKeyword = this.$route.query.defaultKeyword;
    this.historyKeywordList = this.$route.query.historyKeywordList;
    this.hotKeywordList = this.$route.query.hotKeywordList;
  },
  async mounted() {}
};
</script>
<style scoped lang="scss">
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
.search {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .head {
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    div {
      width: 20rem;
      height: 2.5rem;
      background: rgb(238, 236, 236);
      margin-top: 0.2rem;
      p {
        width: auto;
        height: 2.5rem;
        line-height: 2.5rem;
        margin-left: 3rem;
      }
    }
    p {
      width: 4rem;
      height: 3rem;
      line-height: 3rem;
      margin-left: 1rem;
    }
    .punt {
      width: 100%;
      height: 3rem;
      background: #ccc;
      position: fixed;
      top: 3rem;
      line-height: 3rem;
    }
  }
  .history {
    width: 100%;
    height: 6rem;
    border-bottom: 5px solid rgb(238, 237, 237);
    .top {
      width: 98%;
      height: 2rem;
      display: flex;
      justify-content: space-between;
      line-height: 2rem;
      margin: 0 auto;
    }
    .bom {
      width: 100%;
      height: 4rem;
      display: flex;
      span {
        width: auto;
        height: 3.5rem;
        margin-left: 1rem;
        border: 1px solid #ccc;
      }
    }
  }
  .hot {
    width: 100%;
    height: 6rem;
    margin-top: 0.5rem;
    .top {
      width: 98%;
      height: 2rem;
    }
    .bom {
      width: 100%;
      height: 8rem;
      display: flex;
      flex-wrap: wrap;
      span {
        width: auto;
        height: 3.5rem;
        margin-left: 1rem;
        border: 1px solid #ccc;
        line-height: 3.5rem;
      }
    }
  }
  .demo{
      width: 100%;
      height: 100%;
      position: absolute;
      top:3rem;
      .met{
        width: 100%;
        height: 2.5rem;
        display: flex;
        line-height: 2.5rem;
        border-bottom: 5px solid #ccc;
      }
      .quert{
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        flex-shrink: 2;
        dl{
          width: 40%;
          height: 15rem;
          margin-left: 2rem;
          dt{
            width: 100%;
            height: 8rem;
            img{
              width: 100%;
              height: 100%;
            }
          }
          dd{
            width: 100%;
            p{
              width: 100%;
              height: 3rem;
              text-align: center;
              &:nth-child(2){
                color:red;
              }
            }

          }

        }
      }
  }
}
</style>