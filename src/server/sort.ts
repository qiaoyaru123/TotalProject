import request from './../utils/index';


export function sortall(){
    return request.get('/catalog/index')
}

export function sortNav(params:any){
    return request.get('/goods/category',params)
}

//获取当前分类信息和子分类
export function sortTwo(params:any){
    return request.get('/catalog/current',params)
}


//根据分类Id或者制造商Id获取商品
export function sortChild(params:any){
    return request.get('/goods/list',params)
}

//获取商品详情
export function sortXiang(params:any){
    return request.get('/goods/detail',params)
}

//相关商品
export function builds(params:any){
    return request.get('/goods/related',params)
}

//获取在售商品数量
export function getCount(params:any){
    return request.get('/goods/count',params)
}






