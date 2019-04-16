var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body',
    favicon: 'src/favicon.ico'
});

var MiniCssExtractPluginConfig =  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "styles/[name]-[hash:8].css",
    chunkFilename: "styles/[id].css"
});

// the path(s) that should be cleaned
let pathsToClean = [
    'dist'
]

let cleanOptions = {
}

const JS_LOADER = {   
    test: /\.(js|jsx)$/,
    loaders: [
        'babel-loader'
    ],
    exclude: /node_modules/
}
const webpackConfig = {
    mode: 'production',
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],    
    output: {
        path: __dirname + '/dist',
        filename: '[name]-[hash:8].js',
        sourceMapFilename: '[name]-[hash:8].js.map',
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            JS_LOADER,
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[name]-[hash:8].[ext]'
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
        MiniCssExtractPluginConfig,
        new webpack.DefinePlugin({
            BASENAME: JSON.stringify("/"),
            "API_URL": JSON.stringify("http://api_url"),          
        })
    ]   
}
module.exports = webpackConfig