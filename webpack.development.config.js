var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body',
    favicon: 'src/favicon.ico'
})

// the path(s) that should be cleaned
let pathsToClean = [
    'dist'
]

let cleanOptions = {
}

const webpackConfig = {
    mode: 'development',
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
    devtool: 'inline-source-map',
    output: {
        path: __dirname + '/dist',
        filename: '[name]-[hash:8].js',
        publicPath: '/'
    },
    module: {
        rules: [
            // JS_LOADER,
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader','eslint-loader']
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(ico)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                    },
                }],
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new webpack.DefinePlugin({
            BASENAME: JSON.stringify("/"),
            "API_URL": JSON.stringify("http://localhost:3000")
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true
    }
}
module.exports = webpackConfig