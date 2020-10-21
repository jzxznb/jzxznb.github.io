const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.MODE === 'development' ? 'development' : 'production';

module.exports = {
    mode,
    entry: { appIndex: path.resolve(__dirname, '../src/index.jsx') },
    output: {
        path: path.resolve(__dirname, '../bundle'),
        filename: '[name].js',
        // filename: '[name].[chunkhash].js',//哈希值，但是劳资不需要
        publicPath: '/child_project/games/bundle/' // 打包后输出路径以/bundle/开头
    },
    resolve: {
        extensions: ['.js', '.css', '.less', 'jsx'],
        alias: {}
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../bundle/index.html'),
            template: path.resolve(__dirname, '../src/tempIndex.html')
        })
    ],
    devServer: {
        port: 8082,
        contentBase: path.resolve(__dirname, '../bundle')
        // proxy: {
        //     '/guessUcan1tfind': {
        //         target: 'http://39.98.39.217:5000',
        //         pathRewrite: { '^/guessUcan1tfind': '' },
        //         secure: false,
        //     },
        // },
    }
};
