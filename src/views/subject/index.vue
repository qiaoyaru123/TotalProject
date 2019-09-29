<template>
  <div class="subject">
    <div class="subject-box">
      <div class="box" v-for="(item,index) in getData" :key="index">
        <div class="red" :style="{backgroundImage:`url(${item.scene_pic_url})`}">
          <!-- <img :src="item.scene_pic_url" alt /> -->
        </div>
        <div class="bottom">
          <h3>{{item.title}}</h3>
          <p>{{item.subtitle}}</p>
          <p>{{item.price_info}}元起</p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
<<<<<<< HEAD
import Footer from "@/components/footer/index.vue";
import { mapMutations, mapState, mapActions } from "vuex";
import { subject } from "../../server/index";
export default {
  data() {
    return {
      getData: []
    };
  },
  components: {
    Footer
  },
  methods: {
    ...mapActions(["subject"]),
    ...mapMutations(["getprodata"])
  },
  created() {
    this.getPro();
  },
  async mounted() {
    let getAll = await subject({});
    console.log(getAll);
    this.getData = getAll.data.data;
  }
};
=======
import {list}  from "@/server/index"
import {mapMutations,mapState,mapActions} from 'vuex';
import {subject} from '../../server/index';
export default {
    data(){
        return {
            getData:[]
        }
    },
    methods:{
      
    },
    created(){
        
    },
    async mounted(){
        let getAll = await subject({

        })
        console.log(getAll);
        this.getData = getAll.data.data;

    }
}
>>>>>>> b066ad801f8843f0766c7c1d30d27ab0776bed65
</script>
<style  lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
html {
  font-size: calc(100 / 750 * 100vw);
}
#app {
  width: 100%;
  height: 100%;
}

.subject {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  .subject-box {
    width: 100%;
    flex: 1;
    overflow: auto;
  }
  .box {
    width: 100%;

    .red {
      width: 100%;
      height: 4rem;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .bottom {
      width: 100%;
      height: 2rem;
      text-align: center;
      line-height: 0.6rem;
      h3 {
        width: 100%;
        margin-top: 0.2rem;
        font-weight: normal;
      }
      p {
        width: 100%;
      }
      p:nth-child(2) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p:nth-child(3) {
        width: 100%;
        color: red;
      }
    }
  }
}
</style>