import Vue from 'vue';
import Vuex from 'vuex';
import getData from "./module/getData";
import deleteData from "./module/deleteData"
Vue.use(Vuex);

const store=new Vuex.Store({
    modules:{
        getData,
        deleteData
    }
});

export default store


