const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
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
                 test:/\.(js|jsx)$/,
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
     plugins:[htmlPlugin,new CopyPlugin({
        patterns: [
          { from: "src/assets/images", to: "assets/images" },
          { from: "src/_redirects", to:"" },
          { from: "src/locales", to:"locales" },
        ],
      })]
 };