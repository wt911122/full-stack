const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: {
        app: [ path.resolve(__dirname, '../client/app.js') ],
        login: [ path.resolve(__dirname, '../client/login.js') ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public/',
    },

    mode: 'development',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../client'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [{
                  loader: 'style-loader' // creates style nodes from JS strings
                }, {
                  loader: 'css-loader' // translates CSS into CommonJS
                }, {
                  loader: 'less-loader' // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Acoooount',
            // Load a custom template (lodash by default)
            chunks: ['app'],
            template: 'index.html',
            filename: './dist/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Acoooount',
            chunks: ['login'],
            template: 'index.html',
            filename: './dist/login.html'
        }),
        new VueLoaderPlugin()
    ],
}