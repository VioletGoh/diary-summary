const path = require("path");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    runtimeCompiler: true,
    productionSourceMap: false, //打包后是否生成map文件

    // 配置全局样式变量
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/assets/styles/variable.less')]
        }
    },

    // 开发服务配置
    // devServer: {
    //     // disableHostCheck: true,
    //     proxy: {
    //         '/api': {
    //             target: 'http://139.196.252.230:8444',
    //             changeOrigin: true, // 设置同源  默认false，是否需要改变原始主机头为目标URL
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     }
    // }
};