import axios from 'axios'

const config = {
    baseURL: 'http://112.74.99.5:3000/web/api', // api的base_url
    timeOut: 5*60*1000,
};
const config2 = {
    baseURL: '', // api的base_url
    timeOut: 5*60*1000,
};

const http = axios.create(config);
const http2 = axios.create(config2);

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config,'00000')
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 添加请求拦截器
http2.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config,'00000')
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http2.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(response,'999999')
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});



export  {http,http2};