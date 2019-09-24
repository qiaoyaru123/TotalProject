
import request from "../utils/index";

export let Login = (params: object) => {
    return request.post("/auth/loginByMobile",params);
 };

 export let Site = () => {
    return request.get("/address/list");
 };
  
