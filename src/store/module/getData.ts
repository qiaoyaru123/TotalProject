
import axios from "axios"
export default {
    state: {
        project:[]
    },
    mutations: {
        getprodata(state:any,data:any){
            state.project=data;
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