import request from "../utils/index";

//查询收藏栏商品
export let myCollect = (params:any) => {
    return request.get("/collect/list",params);
 };
  