
import request from "../utils/index";

export let Login = (params: object) => {
    return request.post("/auth/loginByMobile",params);
 };

 export let Site = () => {
    return request.get("/address/list");
 };
  
export let addSite=(params:any)=>{
   return request.post("/address/save",params);
}
export let deleteSite=(params:any)=>{
   return request.post("/address/delete",params);
}