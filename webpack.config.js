const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template:'./public/index.html',
    filename: 'index.html'
 });
const path = require("path");

 module.exports = {
     context: __dirname,
     entry : './src/index.js',
     output :{
         path: path.resolve(__dirname, 'dist'),
         filename:'main.js',
         publicPath:'/',
     },
     module:{
         rules:[
             {
                 test:/\.js$/,
                 exclude:'/node_modules/',
                 use:"babel-loader"
             },
             {
                 test:/\.(scss|css)$/,
                 use:['style-loader', 'css-loader', 'sass-loader']
             },
             {
                 test:/\.(png|jpg|svg|gif)?$/,
                 use:'file-loader'
             }
         ]
     },
     plugins:[htmlPlugin]
 };