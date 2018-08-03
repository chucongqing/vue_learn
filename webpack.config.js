module.exports= {
    entry: __dirname + "/app/main.js", //项目的入口文件，webpack会从main.js开始，把所有依赖的js都打包
    output:{
        path:path.resolve(__dirname, './public'), //项目的打包文件路径
        publicPath:'/public', //通过devServer访问路径
        filename:"bundle.js" //打包后的文件名
    },

    devServer:{
        contentBase:"./public",  
        historyApiFallback:true, //不跳转
        inline:true
    }
}