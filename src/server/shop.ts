import request from '../utils/index';

export function addShop(params:any){
    return request.post('/cart/add',params)
}