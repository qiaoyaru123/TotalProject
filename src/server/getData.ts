
import request from "../utils/index";

//查询收藏栏商品
export let myCollect = (params:any) => {
    return request.get("/collect/list",params);
 };

//获取收藏栏详情数据
 export let goodsDetail=(params:any)=>{
     return request.get("/goods/detail",params)
 }