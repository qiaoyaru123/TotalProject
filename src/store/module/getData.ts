
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
      
    },
}