
import request from "../utils/index";

//查询收藏栏商品
export let myCollect = (params:any) => {
    return request.get("/collect/list",params);
 };

//获取收藏栏详情数据
 export let goodsDetail=(params:any)=>{
     return request.get("/goods/detail",params)
<<<<<<< HEAD
 }
//获取奇趣数据
 export let goodsList = (params:any)=>{
    return request.get('/goods/list',{params})
}

 //betterScroll 数据接口    
 export let goodCategory = (params:any)=>{
    return request.get('/goods/category',{params})
}
=======
 }
>>>>>>> b066ad801f8843f0766c7c1d30d27ab0776bed65
