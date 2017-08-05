var path = require('path');
const webpack = require('webpack');

const {
    AureliaPlugin
} = require('aurelia-webpack-plugin');
const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');


module.exports = {
    entry: {
        app: "aurelia-bootstrapper",
        bootstrap: bootstrapEntryPoints.dev
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: "/dist/"
    },

    resolve: {
        extensions: ['.js', '.ts'],
        modules: ['src', 'node_modules']
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: ["node_modules"],
                use: "babel-loader"
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            },
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                use: 'imports-loader?jQuery=jquery'
            },
            {
                test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
                loader: 'imports-loader?jQuery=jquery'
            }
        ]
    },

    //watch: true,

    plugins: [
        new AureliaPlugin({
            includeAll: "src"
        })
    ]
}