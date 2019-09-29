import request from './../utils/index';

//获取专题数据
export function subject(){
    return request.get('/topic/list')
}
