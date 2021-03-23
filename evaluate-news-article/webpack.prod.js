const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WbPlugin=require("workbox-webpack-plugin")
module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output:{
      libraryTarget: 'var',
      library: 'Client',
    },
    module: {
        rules: [
        {
            test: "/.js$/",
            exclude: /node_modules/,
            loader: "babel-loader",
          },
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: "file-loader?name=./assets/images/[name].[ext]",
          },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new WbPlugin.GenerateSW()
    ],
  
}
