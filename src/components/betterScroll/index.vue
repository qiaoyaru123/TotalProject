<template>
  <div class="BScrollwrap">
    <div class="bscrollChild">
      <!-- <div class="categoryDetail">
        <div>{{msgName.name}}</div>
        <div>{{msgName.frontName}}</div>
      </div> -->
      <slot name="headDetail"></slot>

      <slot :data="list.value"></slot>
      <p class="bsUp">{{msgUp}}</p>
      <p class="bsDown">{{msgDown}}</p>
    </div>
  </div>
</template>


<script>
/**
 * @props {
 *   list: {
 *     query?: {[key:string]:any}, 查询条件
 *     limit?: number, 每次查询的数量 默认10
 *     count: number, 最后一次查询结果返回的长度 用来控制loadMore的显示与否
 *     refreshDispatch?: string pull-refresh 查询的store dispacthName, 当需要下拉刷新的时候才传
 *     loadMoreDispatch?: string loadMore 查询的store dispacthName
 *     value: Array<{[key:string]:any}> 查询结果
 *   }
 * }
 */
import BScroll from "better-scroll";
import { mapActions, mapState } from "vuex";
export default {
  props: {
    msgName: {
      default: () => {
        return {};
      }
    },
    list: {
      type: Object,
      default: () => {
        return {
          query: {},
          limit: 10,
          count: 1000,
          page:1,
          refreshDispatch: "category/pullRefresh",
          loadMoreDispatch: "category/loadMore"
        };
      }
    }
  },
  data() {
    return {
      BsDate: {
        up: "下拉刷新...",
        upend: "刷新中...",
        down: "释放加载...",
        downEnd: "上拉加载..."
      },
      msgUp:'下拉刷新',
      msgDown:''
    };
  },
  methods: {
    async pullRefresh(payload) {
      await this.$store.dispatch(this.list.refreshDispatch, payload);
    },
    async loadMore(payload) {
      await this.$store.dispatch(this.list.loadMoreDispatch, payload);
    },
    scrollUp(e) {
      let maxH = Math.abs(this.Bs.maxScrollY),
        h = Math.abs(e.y);
      // console.log(maxH,'最大高度',e.y,'当前高度')
      if (h > maxH + 50) {
        this.isFlag = true;
        this.msgDown = this.BsDate.down;
      } else {
        this.isFlag = false;
        this.msgDown = this.BsDate.downEnd;
      }
      if (e.y > 30) {
        this.msgUp = this.BsDate.down;
      }
    },
    scrollEnd(){
      this.msgUp = this.BsDate.up
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.Bs) {
        this.Bs = new BScroll(".BScrollwrap", {
          scrollY: true,
          click: true,
          probeType: 3,
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 300
          },
          pullDownRefresh: {
            threshold: 40,
            stop: 50
          },
          pullUpLoad: {
            threshold: -50,
            stop: -50
          }
        });
        this.Bs.on("scroll", this.scrollUp);
        this.Bs.on("scrollEnd", this.scrollEnd);
        // 监听下拉刷新事件
        this.Bs.on("pullingDown", async () => {
          this.msgup = this.BsDate.upend
          await this.pullRefresh();
          console.log("网络请求结束");
          this.Bs.finishPullDown();
        });
        // 监听上拉刷新事件
        this.Bs.on("pullingUp", async () => {
          console.log(this.list,'this page ------------------')
          await this.loadMore({ page: this.list.query.page + 1 });
          console.log('上拉加载')
          this.Bs.finishPullUp();
        });
      } else {
        this.Bs.refresh();
      }
    })
  }
};
</script>