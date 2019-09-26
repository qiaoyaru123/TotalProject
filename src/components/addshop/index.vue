<template>
    <div class="mark" >
        <div class="bot">
            <div class="top">
                <dl>
                    <dt>
                        <img alt="" v-lazy="getData.info.list_pic_url">
                    </dt>
                    <dd>
                        <p>单价：<span>{{getData.productList[0].retail_price}}</span></p>
                        <p>库存：<span>{{getData.productList[0].goods_number}}</span></p>
                        <p>已选择：</p>
                    </dd>
                </dl>
            <div @click="handleOpen()">X</div>
            </div>
            <div class="cen">
                <p>数量</p>
                <div>
                    <Count :count="getData.comment"/>
                    <!-- <span>{{getData.comment}}</span> -->
                    <!-- <Count :count="0"/> -->
                </div>
            </div>
            <div class="bom">
                <button >加入购物车</button>
                <button>立即下单</button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
import Count from '../count/index';
export default {
    props:['getData'],
    components:{
        Count
    },
    data(){
        return {
            
        }
    },
    computed:{
        ...mapState(['flag'])
    },
    methods:{
        ...mapMutations(['handleBi']),
        handleOpen(){
            this.handleBi()
        }
    },
    created(){
        // console.log(this._props.getData.comment.count)

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    *{
        width:100%;
        height: 100%;
    }
    html{
        font-size: calc(100/750*100vm);
    }
    html,body{
        width: 100%;
        height: 100%;
        display: flex;
        position: absolute;
        top:0;
        left:0;
    }
    .mark{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.6);
        z-index:10000;
        position: absolute;
        top: 0;
        left:0;

        .bot{
            width: 100%;
            height: 15rem;
            background: #fff;
            position: absolute;
            bottom: 4rem;
            display: flex;
            flex-direction: column;
            .top{
                width: 100%;
                height: 7rem;
                display: flex;
                justify-content: space-between;
                dl{
                width: 15rem;
                height: 7rem;
                display: flex;
                justify-content: space-around;
                dd{
                    p{
                        line-height: 1.5rem;
                        height: 2rem;
                    }
                }
            }
            div{
                width: 3rem;
            }
            }
            .cen{
                width: 100%;
                height: 4rem;
               
                p{
                    width: 100%;
                    height: 2rem;
                }
                div{
                    height: 2rem;
                    display: flex;
                    
                }
            }
            .bom{
                width: 100%;
                height: 3.5rem;
                display: flex;
                margin-top: 0.5rem;
                button{
                    width: 50%;
                    height: 3.5rem;
                    color: #fff;
                    &:nth-child(1){
                        background: orange;
                    }
                    &:nth-child(2){
                        background: skyblue;
                    }
                }
            }
        }
    }


</style>