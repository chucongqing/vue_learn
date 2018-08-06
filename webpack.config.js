var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports= {
    devtool:'eval-source-map',
    entry: __dirname + "/app/main.js", //项目的入口文件，webpack会从main.js开始，把所有依赖的js都打包
    output:{
        path:path.resolve(__dirname, './public'), //项目的打包文件路径
        // publicPath:'/public', //通过devServer访问路径
        filename:"bundle.js" //打包后的文件名
    },
    
    devServer:{
        contentBase:"./public",  
        historyApiFallback:true, //不跳转
        inline:true,
        port:8081
    },
    
    //loader
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            "env"
                        ]
                    }
                },
                exclude:/node_modules/
            },

            {
                test:/\.txt$/,
                use:'raw-loader'
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }, 
        ]
    },

    plugins:[
        //make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]


}