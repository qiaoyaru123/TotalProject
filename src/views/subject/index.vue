<template>
    <div class="subject">
        <!-- {{getData}} -->
        <div class="box" v-for="(item,index) in getData" :key="index">
            <div class="red">
                <img :src="item.scene_pic_url" alt="">
            </div>
            <div class="bottom">
                <h3>{{item.title}}</h3>
                <p>{{item.subtitle}}</p>
                <p>{{item.price_info}}元起</p>
            </div>
        </div>
        <Foot/>
    </div>
</template>
<script>
import {mapMutations,mapState,mapActions} from 'vuex';
import {subject} from '../../server/index';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            getData:[]
        }
    },
    computed:{
        ...mapState(['project'])
    },
    methods:{
        ...mapActions(['getPro']),
        ...mapMutations(['getprodata'])
    },
    created(){
        this.getPro();
    },
    async mounted(){
        let getAll = await subject({

        })
        console.log(getAll);
        this.getData = getAll.data.data;

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
        height: 450px;
        .red{
            width: 100%;
            height: 213px; 
            img{
                width: 100%;
                height: 100%;
            }
        }
        .bottom{
            width:100%;
            height: 200px;
            text-align: center;
            h3{
                width: 100%;
                height: 30px;
                
            }
            p{
                width: 100%;
                height: 50px;
            }
            p:nth-child(3){
                width: 100%;
                height: 30px;
                color: red;
            }
        }
    }
    .foot{
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