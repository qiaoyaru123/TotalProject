import Vue from 'vue';
import Vuex from 'vuex';
import getData from "./module/getData"
Vue.use(Vuex);

const store=new Vuex.Store({
    modules:{
        getData
    }
});

export default store


