<template>
    <div class="search">
        <div class="head">
            <p @click="handleGo()"><</p>
            <div>
                <input value="" :placeholder="defaultKeyword.keyword" name="" v-model="val" @keyup="handleChange"/>
            </div>
            <p>取消</p>
        </div>
        <div class="history">
            <div class="top">
                <span>历史记录</span>
                <span></span>
            </div>
            <div class="bom">
                <span v-for="(item,index) in historyKeywordList" :key="index">{{item}}</span>
            </div>
        </div>
        <div class="hot">
            <div class="top">
                <span>热门搜索</span>
            </div>
            <div class="bom">
                <span v-for="(item,index) in hotKeywordList" :key="index">
                    {{item.keyword}}
                    </span>
            </div>
        </div>
    </div>
</template>
<script>
import {searchPage} from '../../server/index';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            defaultKeyword:'',
            historyKeywordList:'',
            hotKeywordList:'',
            val:''
        }
    },
    computed:{

    },
    methods:{
        handleChange(e){
            if(e.keyCode == 13){
                console.log(this.val) 
            }
        },
        handleGo(){
            this.$router.go(-1)
        }
    },
    created(){
        console.log(this.$route.query)
        this.defaultKeyword = this.$route.query.defaultKeyword;
        // console.log(this.defaultKeyword.keyword)
        this.historyKeywordList = this.$route.query.historyKeywordList;
        this.hotKeywordList = this.$route.query.hotKeywordList
    },
   async  mounted(){
       let getPage = await searchPage({
           params:{keyword:this.val}
       })
       console.log(getPage.data)
    }
}
</script>
<style scoped lang="scss">
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
}
.search{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .head{
        width: 100%;
        height: 3rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-around;
        div{
            width: 20rem;
            height: 2.5rem;
            background: rgb(238, 236, 236);
            margin-top: .2rem;  
            p{
                width: auto;
                height: 2.5rem;
                line-height: 2.5rem;
                margin-left: 3rem;
            }
        }
        p{
            width: 4rem;
            height: 3rem;
            line-height: 3rem;
            margin-left: 1rem;
        }

    }
    .history{
        width: 100%;
        height: 6rem;
        border-bottom: 5px solid rgb(238, 237, 237);
        .top{
            width: 98%;
            height: 2rem;
            display: flex;
            justify-content: space-between;
            line-height: 2rem;
            margin: 0 auto;
        }
        .bom{
            width: 100%;
            height: 4rem;
            display: flex;
            span{
                width: auto;
                height: 3.5rem;
                margin-left: 1rem;
                border: 1px solid #ccc;
                
            }

        }
    }
    .hot{
        width: 100%;
        height: 6rem;
        margin-top: 0.5rem;
        .top{
           width: 98%;
            height: 2rem;
        }
        .bom{
            width: 100%;
            height: 8rem;
            display: flex;
            flex-wrap: wrap;
            span{
                width: auto;
                height: 3.5rem;
                margin-left: 1rem;
                border: 1px solid #ccc;
                line-height: 3.5rem;
                
            }
        }
    }
}

</style>