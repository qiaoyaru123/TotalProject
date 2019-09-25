<template>
    <div class="detail">
        <ShopPage/>

    </div>
</template>
<script>
import ShopPage from '../../components/shop/index';
export default {
    props:{

    },
    components:{
        ShopPage
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
html{
    font-size: calc(100/750*100vm);
}
.detail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}



</style>