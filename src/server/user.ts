
import request from "../utils/index";

export let Login = (params: object) => {
    return request.post("/auth/loginByMobile",params);
 };

<<<<<<< HEAD
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

=======
 export let Site = () => {
    return request.get("/address/list");
 };
  
export let addSite=(params:any)=>{
   return request.post("/address/save",params);
}
export let deleteSite=(params:any)=>{
   return request.post("/address/delete",params);
}
>>>>>>> b066ad801f8843f0766c7c1d30d27ab0776bed65
