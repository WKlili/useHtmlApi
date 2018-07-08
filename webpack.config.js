const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: {
    // app: './src/main.js'
    app: './src/components/index.js' //打包组件js入口文件
  },
  output: {
    // filename: '[name].bundle.js',
    // path: path.resolve(__dirname, 'dist')
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'nemoModal.js',
    library: 'nemoModal',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   title: 'test输出到页面的内容',
    //   template: 'index.html',
    //   clientLogLevel: 'warning',
    // }),


    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
};