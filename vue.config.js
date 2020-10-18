

module.exports = {
    devServer: {
        host: "localhost",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'http://api.bilibili.com/x/web-interface/view',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}







