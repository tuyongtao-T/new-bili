const TokenKey = 'Admin-Token';
const UserInfoKey = 'User-Info';
const AfterLoadingRoutes = 'After-Loading-Routes';

// 存储token
export function setToken(token) {
    return localStorage.setItem(TokenKey, JSON.stringify(token));
}

export function getToken () {
    return JSON.parse(localStorage.getItem(TokenKey));
}

export function removeToken() {
    return localStorage.removeItem(TokenKey);
}

//存储用户信息
export function setUserInfo(info) {
    return localStorage.setItem(UserInfoKey, JSON.stringify(info));
}

export function getUserInfo () {
    return JSON.parse(localStorage.getItem(UserInfoKey));
}

export function removeUserInfo() {
    return localStorage.removeItem(UserInfoKey);
}

//存储获取的路由表
export function setAfterLoadingRoutes(routes) {
    return localStorage.setItem(AfterLoadingRoutes, JSON.stringify(routes));
}

export function getAfterLoadingRoutes () {
    return JSON.parse(localStorage.getItem(AfterLoadingRoutes));
}

export function removeAfterLoadingRoutes() {
    return localStorage.removeItem(AfterLoadingRoutes);
}