module.exports = { 
    publicPath: '/seminar/',
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap((args) => {
                args[0].title = 'TUHEP';
                return args;
            });
    },
    devServer: {
        proxy: {
          '/tuhepApi/*': {
            pathRewrite: {'^/tuhepApi': '/config'},
            target: 'http://hep.tsinghua.edu.cn',
            changeOrigin: true
          }
        }
      }
 } 