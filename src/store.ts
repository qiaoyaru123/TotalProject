import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    project:[],
    
  },
  mutations: {
    getprodata(state,data){
      state.project=data;
    }
 

  },
  actions: {
    getPro(context){
      axios.get('api/topic/list').then((res)=>{
        console.log(res.data.data.data);
        context.commit('getprodata',res.data.data.data)
      })
    },

 
  },
});
