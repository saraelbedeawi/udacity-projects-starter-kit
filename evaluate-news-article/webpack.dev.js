const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WbPlugin=require("workbox-webpack-plugin")

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'minimal',
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
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new WbPlugin.GenerateSW()

    ]
}
