
import axios from "axios"
export default {
    state: {
        project:[],
        flag:false
    },
    mutations: {
        getprodata(state:any,data:any){
            state.project=data;
          },
        hanldeBen(state:any){
          state.flag=true
        },
        handleBi(state:any){
          console.log(111111111)
          state.flag=false;
        }
    },
    actions: {
        getPro(context:any){
            axios.get('api/topic/list').then((res:any)=>{
              console.log(res.data.data.data);
              context.commit('getprodata',res.data.data.data)
            })
          },
    },
}