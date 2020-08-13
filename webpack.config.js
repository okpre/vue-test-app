const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                        esModule: true,
                        extractCSS: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                    'node-sass'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}