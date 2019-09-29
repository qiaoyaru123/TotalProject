
import {deleteCollectData} from "../../server/index"
export default {
    namespaced: true,
    state: {
       subjectData:[]
    },
    mutations: {
      setSubjectData(){
          
      }
    },
    actions: {
     async deteleCollect({commit}:any,pramse:any){
         let data= await deleteCollectData(pramse);
         console.log(data)
      }
    },
}