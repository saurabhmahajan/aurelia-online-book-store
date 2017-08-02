var path = require('path');
const {AureliaPlugin} = require('aurelia-webpack-plugin');

module.exports = {
    entry: {
        app: "aurelia-bootstrapper"
    },

    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: "/dist/"
    },

    resolve: {
        extensions: ['.js', '.ts'],
        modules: ['src', 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ["node_modules"],
                use: "babel-loader"
            },
            {
                test: /\.html$/,
                use: "html-loader"
            }
        ]
    },

    //watch: true,

    plugins: [
        new AureliaPlugin({includeAll: "src"})
    ]
}