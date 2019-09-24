<template>
    <div class="home" >
        <div  class="wrap" >
            <!-- <div class="swiper-container" >
                <div class="swiper-wrapper">
                    <div class="swiper-slider" v-for="(item,index) in getall.banner" :key="index">
                        <img src="item.image_url"/>
                    </div>
                </div>
                 <div class="swiper-pagination"></div>
            </div> -->  
        </div>

        <div class="nav">
               <dl v-for="(item,index) in getall.channel" :key="index">
                    <dt>
                      <img :src="item.icon_url" alt="">
                    </dt>
                <dd>{{item.name}}</dd>
            </dl>   
        </div>
        <div class="con">
            <h3>品牌制造商直供</h3>
            <div v-for="(item,index) in getall.brandList" :key="index" class="cons">
                <img :src="item.new_pic_url" alt="">
                <p>{{item.name}}</p>
                <h5>{{item.floor_price}}元起</h5>
                

            </div>
        </div>
    </div>
</template>
<script>
import {gethome} from '../../server/index';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            getall:[]
        }
    },
    computed:{
       
    },
    methods:{
        
    },
    created:{
      async mounted () {
        let data=await gethome({})
        console.log(data.data);
        this.getall= data.data
      }
    }
}
</script>
<style lang="scss">
    // @import url('./index.scss');
    *{
    width: 100%;
    height: 100%;
}
html,body{
    width: 100%;
    height: 100%;
    font-size: calc(100/750*100)vw;
    overflow-x: hidden; 
  overflow-y: auto; 
  max-width: 1200px;
  margin: 0;
  padding:0;
}
#app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .home{
    height: 100%;
    display: flex;
    flex-direction: column;
    .wrap{
       
        height: 11rem;
        border-bottom: 1px solid #ccc;
        .swiper-container{
            width: 100%;
            height: 100%;
            .swiper-slider{
                width: 100%;
                height: 100%;
                 img{
                 width: 100%;
                 height: 100%;
                } 
            }
               
        }
         
    }
    .nav{
        
        height: 5rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-around;
        dl{
            width: 3rem;
            height: 3rem;
            display: flex;
            flex-direction: column;
            dt{
                width: 1.5rem;
                height: 1.5rem;
            }
            dd{
               width: 100%;
                height: 1rem;
                line-height: 2rem;
                margin-left: -1rem;
            }
        }
    }
    .con{
        height: 15rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        flex-wrap: wrap;
        flex-shrink: 2;
        h3{
            height: 1rem;
        }
        .cons{
            width: 12rem;
            height: 7.5rem;
            border: 1px solid #ccc;
            img{
                
                height: 7.5rem;
            }
            p{
                position: absolute;
                margin-top: -7.8rem;
                margin-left: -9rem;
            }
            h5{
                position: absolute;
                margin-top: -6rem;
                margin-left: -10rem;
                color: #ccc;
            }
        }
    }
}
}
</style>
