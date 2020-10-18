import {http} from '@/utils/http'

//注册接口
export function register(data) {
    return http.post('/register',data);
}
