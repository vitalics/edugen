var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var nesting = require('postcss-nesting');

module.exports = {
    entry: {
        app: './src/entry',
        vendor: './src/vendor'
    },
    output: {
        path: path.resolve("./build/"),
        filename: "[name].js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        new CommonsChunkPlugin({
            name: ['app', 'vendor'],
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            chunks: ['vendor', 'app']
        }),
        new CopyWebpackPlugin([{
            from: 'index.html'
        }])
    ],
    resolveLoader: {
        modulesDirectories: [
            './node_modules'
        ]
    },
    module: {
        preLoaders: [
            { test: /\.ts$/, loader: 'tslint' }
        ],
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.css$/, loader: 'style!css!postcss' },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg|ico)(\?[a-z0-9=\.]+)?$/,
                loader: 'url-loader?limit=100000'
            }
        ],
        postLoaders: []
    },
    tslint: {
        emitErrors: false,
        failOnHint: false
    },
    postcss: function () {
        return [nesting];
    }
};