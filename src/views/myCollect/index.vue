<template>
  <div class="collect">
    <MyHeader :title='title' :isShow="isShow"/>
    <main class="m-collect-main">
      <div class="m-collect-item" v-for="item in datas" :key="item.id">
          <div class="item" @click="detailPage(item.value_id)">
                <img v-lazy="item.list_pic_url" alt="" class="icon">
             <div class="m-item-con">
                <span>{{item.name}}</span>
                <span>{{item.goods_brief}}</span>
                <span>￥{{item.retail_price}}</span>
             </div>
          </div>
      </div>
    </main>
  </div>
</template>
<script>
//请求数据
import { myCollect } from "@/server/index";
//引入组件
import MyHeader from "@/components/myHeader/index.vue"
export default {
  name: "myCollect",
  data() {
    return {
      datas: [],
      //提示
      title:"easyLikeGoods",
      //显示箭头
      isShow:true
    };
  },
  components:{
    MyHeader
  },
  async mounted() {
    let data = await myCollect({
      params: {
       typeId: 0
      }
    });
    this.datas = data.data;
    console.log(data)
  },
  methods:{
    goMy(){
      this.$router.push("/my")
    },
    detailPage(id){
      console.log(id)
      this.$router.push({path:"/goodsDetail",query:{id}})
    }
  }
};
</script>
<style scoped lang="scss">
  @import url("./index.scss");
</style>