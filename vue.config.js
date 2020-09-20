module.exports = { 
    publicPath: '/meeting/',
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap((args) => {
                args[0].title = 'TUHEP';
                return args;
            });
    }
 } 