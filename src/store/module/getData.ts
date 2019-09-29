
<<<<<<< HEAD
import {subject,sortNav,goodCategory,goodsList} from "../../server/index"
export default {
    namespaced: true,
    state: {
       subjectData:[],
       navData:[],
       brotherCategory:[],
       currentCategory:{},
       goodsLists:[]
    },
    mutations: {
      setSubjectData(){
          
      },
      setNavData(state:any,payload:any){
           console.log(payload,123)
           state.navData=payload.data.brotherCategory;
           state.brotherCategory=payload.data.brotherCategory;
           state.currentCategory=payload.data.currentCategory
      },
      setGoodsList(state:any,payload:any){
        state.goodsLists=payload.data.data;
      },
    },
    actions: {
     async getSubjectData({commit}:any){
         let data= await subject();
         console.log(data)
      },
      async getNavData({commit}:any,params:any){
        let data= await sortNav(params);
        commit('setNavData',data)
      },
      async getGoodsList({commit}:any,params:any){
       let result=await goodsList(params);
       commit('setGoodsList',result)
    },
      async getGoodCategory({commit}:any,payload:any){
        // console.log(id,'------id')
        let result = await goodCategory(payload)
        commit('setCate',{ data:result.data.brotherCategory,id:payload.id })
        // console.log(result,'result------------')
    }
=======
export default {
    namespaced: true,
    state: {
      data:123,
      flag:false
    },
    mutations: {
      hanldeBen(state:any){
        state.flag=!state.flag
      },
      handleBi(state:any){
        state.flag=false
      }
    },
    actions: {
      
>>>>>>> b066ad801f8843f0766c7c1d30d27ab0776bed65
    },
}