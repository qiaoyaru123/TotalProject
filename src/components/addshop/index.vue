<template>
    <div class="mark">
        <div class="bot">

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
        flex-direction: column;
    }
    .mark{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.3);
        .bot{
            width: 100%;
            height: 15rem;
            background: #fff;
            position: absolute;
            bottom: 4rem;
        }
    }


</style>