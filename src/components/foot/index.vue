<template>
    <div class="foot">
        <router-link to="/">首页</router-link>
        <router-link to="/subject">专题</router-link>
        <router-link to="/sort">分类</router-link>
        <router-link to="/shop">购物车</router-link>
        <router-link to="/my">我的</router-link>
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
    .foot{
       
        height: 50px;
        background: #fff;
        line-height: 50px;
        display: flex;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
    }

</style>