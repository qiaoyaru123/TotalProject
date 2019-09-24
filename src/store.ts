import Vue from 'vue';
import Vuex from 'vuex';
<<<<<<< HEAD
=======
import axios from 'axios';


>>>>>>> 920112bcc7cd3b8d39fb5ca2823f0e38ea46b3c7

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
<<<<<<< HEAD

  },
  mutations: {

  },
  actions: {

=======
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

 
>>>>>>> 920112bcc7cd3b8d39fb5ca2823f0e38ea46b3c7
  },
});
