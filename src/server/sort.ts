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

//获取商品查询的相关信息
export function buildSearch(){
    return request.get('/search/index')
}

//商品查询模糊查询关键字
export function searchPage(params:any){
    return request.get('/search/helper',params)
}








