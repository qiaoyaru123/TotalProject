<template>
    <div class="subject">
        <div class="box" v-for="(item,index) in project" :key="index">
            <div class="red">
                <img :src="item.scene_pic_url" alt="">
            </div>
            <div class="bottom">
                <h3>{{item.title}}</h3>
                <p>{{item.subtitle}}</p>
                <p>{{item.price_info}}元起</p>
            </div>

        </div>
    </div>
</template>
<script>
import {list}  from "@/server/index"
export default {
    data(){
        return {
           project:[]
        }
    },
    methods:{
      
    },
   async mounted(){
      let data= await list();
      console.log(data)
    }
}
</script>
<style  lang="scss">
.subject{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .box{
        width: 100%;
        height: 310px;
        .red{
            width: 100%;
            height: 213px; 
            img{
                width: 100%;
                height: 100%;
            }
        }
        .bottom{
            line-height: 8px;
            p:nth-child(3){
                color: red;
            }
        }
    
    }
}

</style>