<template>
  <div class="detail">

    <AddShop :getData="xiangData" v-show="flag"/>
  </div>
</template>
<script>
import AddShop from '../../components/addshop/index';
import { sortXiang,builds,getCount } from "../../server/index";
import {mapState} from 'vuex';
export default {
  props: {},
  components: {
    ShopPage,
    AddShop
  },
  data() {
    return {
      id: "",
      xiangData: [],
      getBom:[],
    };
  },
  computed: {
    ...mapState({
      flag:state=>state.getData.flag
    })
  },
  methods: {},
  created() {
    console.log(this.$route.query.item.id);
    this.id = this.$route.query.item.id;
    console.log(this.flag)


  },
  async mounted() {
    //获取详情页的数据
    let getall = await sortXiang({
      params: { id: this.id }
    });
    this.xiangData = getall.data;
    console.log(this.xiangData);

    let getBuild = await builds({
      params: { id: this.id }
    });
    
    this.getBom = getBuild.data.goodsList;
    console.log(this.getBom);

    let getCon = await getCount({
        params:{id:this.id}
    })
    console.log(getCon.data.goodsCount)
  }
};
</script>
<style  lang="scss">
*{
   width: 100%;
  height: 100%; 
}
html {
  font-size: calc(100 / 750 * 100vm);
}
html,body{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.detail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>