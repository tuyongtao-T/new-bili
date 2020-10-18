import {http} from '@/utils/http'

//登录接口
export function login(data) {
    return http.post('/login',data);
}