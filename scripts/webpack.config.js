const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: { appIndex: path.resolve(__dirname, '../src/index.js') },
    output: {
        path: path.resolve(__dirname, '../bundle'),
        filename: '[name].js',
        // filename: '[name].[chunkhash].js',//哈希值，但是劳资不需要
        publicPath: '/bundle', // 打包后输出路径以/bundle/开头
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(less|css)$/,
                use: [
                    'style-loader', 'css-loader', 'less-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../index.html'),
            template: path.resolve(__dirname, '../src/tempIndex.html'),
        }),
    ],
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
    },
    devServer: {
        port: 8888,
    },
};
