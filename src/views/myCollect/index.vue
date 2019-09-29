<template>
  <div class="collect">
    <MyHeader :title="title" :isShow="isShow" />
    <div class="m-collect-item">
      <van-swipe-cell v-for="item in datas" :key="item.value_id">
        <div class="items" @click="detailPage(item.value_id)">
          <img v-lazy="item.list_pic_url" alt class="icon" />
          <div class="m-item-con">
            <span>{{item.name}}</span>
            <span>{{item.goods_brief}}</span>
            <span>￥{{item.retail_price}}</span>
          </div>
        </div>
        <template slot="right">
          <van-button square type="danger" text="删除" @click="deleteItem(item.value_id)" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>
<script>
//请求数据
import { myCollect } from "@/server/index";
//引入组件
import MyHeader from "@/components/myHeader/index.vue";
//仓库
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  inject: ["reload"],
  name: "myCollect",
  data() {
    return {
      datas: [],
      //提示
      title: "easyLikeGoods",
      //显示箭头
      isShow: true
    };
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  components: {
    MyHeader
  },
  async mounted() {
    let data = await myCollect({
      params: {
        typeId: 0
      }
    });
    this.datas = data.data;
  },
  methods: {
    ...mapActions({
      deteleCollect: "deleteData/deteleCollect"
    }),
    goMy() {
      this.$router.push("/my");
    },
    detailPage(id) {
      this.$router.push({ path: "/goodsDetail", query: { id } });
    },
    async deleteItem(id) {
      let res = await this.deteleCollect({
        typeId: 0,
        valueId: id
      });
      this.reload();
    }
  }
};
</script>
<style scoped lang="scss">
@import url("./index.scss");
</style>