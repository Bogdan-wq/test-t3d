const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry:'./src/index.js',
    output: {
        filename: 'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            output: 'styles.css'
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        outputPath:'images',
                        name:'[name]-[sha1:hash:7].[ext]'
                    }
                }
            },
            {
                test:/\.(ttf|otf|eot)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        outputPath:'fonts',
                        name:'[name]-[sha1:hash:7].[ext]'
                    }
                }
            }
        ]
    },
    devServer: {
        open:true,
    }
}