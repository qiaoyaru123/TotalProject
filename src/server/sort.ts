import request from './../utils/index';


export function sortall(){
    return request.get('/catalog/index')
}

export function sortNav(params:any){
    return request.get('/goods/category',params)
}



//根据分类Id或者制造商Id获取商品

export function sortChild(params:any){
    return request.get('/goods/list',params)
}
