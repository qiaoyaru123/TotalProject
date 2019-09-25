<template>
    <div class="shop">
        <div class="head">
            <span><</span>
            简约执行
        </div>
        <div class="nav">

        </div>
        <ul class="dem">
            <li>
                <span>☆</span>
                30天无忧退货</li>
            <li>
                <span>☆</span>
                48小时快递退款
            </li>
            <li>
                <span>☆</span>
                满88元免邮费
            </li>
        </ul>
        <div class="con">
            <h3>发达考试的计划</h3>
            <p>的积分可适当</p>
            <h2>$222</h2>
            <span>WMF制造商</span>
        </div>
        <div class="xiao">
            <span>X0 </span>
            选择规格>
        </div>
        <div class="build">
            <h3>---商品参数---</h3>
            <ul class="box">
                <li>
                    <span>颜色</span>
                    <span>灰黄条纹</span>
                </li>
                <li>
                    <span>颜色</span>
                    <span>灰黄条纹</span>
                </li>
                <li>
                    <span>颜色</span>
                    <span>灰黄条纹</span>
                </li>
                <li>
                    <span>颜色</span>
                    <span>灰黄条纹</span>
                </li>
            </ul>
        </div>
        
        <div class="done">
            sjafkdjak
        </div>


        <div class="root">
            <span>☆</span>
            <span></span>
            <button>加入购物车</button>
            <button>立即购买</button>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style  lang="scss">
*{
    width: 100%;
    height: 100%; 
}
html{
    font-size: calc(100/750*100vm);
}
html,body{
    width: 100%;
    height: 100%; 
    overflow-x: hidden;
    
}
.shop{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .head{
        width: 100%;
        height: 3rem;
        border-bottom: 1px solid #ccc;
        text-align: center;
        line-height: 3rem;
        span{
            position: absolute;
            margin-left: -20rem;
        }
    }
    .nav{
        width: 100%;
        height: 23rem;
        background: palevioletred;
    }
    .dem{
        width: 100%;
        height: 4rem;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
        margin-top: 2rem;
        li{
            line-height: 3rem;
            span{
                color: red;
            }
        }
    }
    .con{
        width: 100%;
        height: 8rem;
        border-bottom: 1p solid #ccc;
        margin-top: 2rem;
        h3{
            width: 100%;
            height: 3rem;
            line-height: 3rem;
            text-align: center;
        }
        p{
            width: 100%;
            height: 2rem;
            line-height: 2rem;
            text-align: center;
        }
        h2{
            width: 100%;
            line-height: 3rem;
            text-align: center;
            color: red;
        }
        span{
            height: 3rem;
            border: 1px solid orange;
            line-height: 3rem;
           margin-left: 10rem;
        }
    }
    .xiao{
        height: 3rem;
        line-height: 3rem;
        
        margin-left: 17rem;
        span{
            color: red;
        }
        
    }
    .build{
        width: 100%;
        h3{
            width: 100%;
            height: 4rem;
            text-align: center;
            line-height: 4rem;
            color: aqua;
        }
        .box{
            width: 100%;
            height: 20rem;
            li{
                width: 90%;
                height: 3.5rem;
                background: #ccc;
                margin: 0 auto;
                display: flex;
                line-height: 3.5rem;
                span{
                    margin-left: 2rem;
                    &:nth-child(1){
                        color: rgb(70, 66, 66);
                    }
                }
                // &:nth-child(2){
                //     padding-top: 1rem;
                // }
            }
        }
    }
    .done{
        width: 100%;
        height: 40rem;
        background: purple;
    }

    .root{
        width: 100%;
        height: 4rem;
        background: paleturquoise;
        display: flex;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        font-size: 3rem;
      button{
          &:nth-child(1){
              width: 25rem;
            height: 3.8rem;
            background: orange;
            color: #fff;
            line-height: 3.8rem;
            text-align: center;

          }
           &:nth-child(2){
              width: 25rem;
            height: 3.8rem;
            background: paleturquoise;
            color: #fff;
            line-height: 3.8rem;
            text-align: center;

          }
            
          
             
        }
    }
}

</style>