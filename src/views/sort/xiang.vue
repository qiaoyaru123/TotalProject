<template>
  <div class="xiang">
    <div class="head">
      <span @click="handleGo()"><</span>
      奇趣分类
    </div>
    <div class="qud">
      <div>
        <ly-tab v-model="selectedId" :items="items" :options="options" @change="handleChange"></ly-tab>
      </div>
    </div>
    <div class="dem" v-if="data.brotherCategory">
      <h5>{{data.brotherCategory[ind].name}}</h5>
      <p>{{data.brotherCategory[ind].front_name}}</p>
    </div>
    <div class="quan">
      <dl v-for="(item,index) in dataChild" :key="index" @click="goshop({item,index})">
        <dt>
          <img alt v-lazy="item.list_pic_url" />
        </dt>
        <dd>
          <p>{{item.name}}</p>
          <p>{{item.retail_price}}</p>
        </dd>
      </dl>
    </div>
    <Foot />
  </div>
</template>
<script>
import { sortNav, sortChild} from "../../server/index";
export default {
  props: {},
  components: {},
  data() {
    return {
      id: "",
      data: [],
      dataChild: [],
      selectedId: 0,
      items: [],
      options: {
        activeColor: '#1d98bd'
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      ind:0,
      ids:''
    };
  },
  computed: {},
  methods: {
      goshop(obj){
          this.$router.push({
              path:'/sortshop',
              query:obj
          })
      },
      handleGo(){
        this.$router.go(-1)
      },
     handleChange(){
       this.ids = this.data.brotherCategory[this.selectedId].id;
       this.handleGetChange();
     },
     async handleGetChange () {
        // 导航下的子元素
        let dataChild = await sortChild({
           categoryId: this.ids 
        });
        console.log(dataChild.data.data);
        this.dataChild = dataChild.data.data;
     }
  },
  created() {
    console.log(this.$route.params.id);
    // console.log(this.$route.query.item)
    let id = this.$route.params.id;
    
    this.id = id;
    console.log(id);
    // let ind = this.$route.query.index;
    // this.ind = ind;
  },
  async mounted() {
    //导航数据
    let dataNav = await sortNav({
      params: { id: this.id }
    });
    console.log(dataNav.data);
    this.data = dataNav.data;
    this.data.brotherCategory.map((item,index)=>{
        this.items.push({label:item.name,index:index})  
    }) 
    
    this.ids = this.data.brotherCategory[this.selectedId].id;
    let dataChild = await sortChild({
          params: { categoryId: this.ids }
        });
        console.log(dataChild.data.data);
        this.dataChild = dataChild.data.data;
  }
};
</script>
<style lang="scss">
html {
  font-size: calc(100 / 750 * 100vm);
}
.xiang {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .head {
    width: 100%;
    height: 3rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
    line-height: 3rem;
    span {
      position: absolute;
      margin-left: -16rem;
    }
  }
  .foot {
    width: 100%;
    height: 0.5rem;
    background: #fff;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
  }
  .qud {
    width: 100%;
    height: 3.5rem;
    display: flex;
    div {
      width: auto;
    }
  }
  .dem {
    width: 100%;
    height: 4rem;

    h5 {
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
    p {
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
  }
  .quan {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 2;
    dl {
      width: 40%;
      height: 10rem;
      margin-left: 2rem;
      dt {
        width: 100%;
        height: 7rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        text-align: center;
      }
    }
  }
}
</style>