
import request from "../utils/index";

export let Login = (params: object) => {
    return request.post("/auth/loginByMobile",params);
 };

 //获取用户地址
 export let Site = () => {
    return request.get("/address/list");
 };
  //添加地址
export let addSite=(params:any)=>{
   return request.post("/address/save",params);
}
//详情数据
export let deleteSite=(params:any)=>{
   return request.post("/address/delete",params);
}

//删除用户收藏夹数据
export let deleteCollectData=(params:any)=>{
   return request.post("/collect/addordelete",params);
}

