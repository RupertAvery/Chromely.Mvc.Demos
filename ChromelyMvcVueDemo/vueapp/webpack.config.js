'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

const utils = {
    resolve: function (dir) {
        return path.join(__dirname, '..', dir);
    },

    assetsPath: function (_path) {
        const assetsSubDirectory = 'static';
        return path.posix.join(assetsSubDirectory, _path);
    }
};

module.exports = {
    entry: {
        main: './src/index.js',
    },

    mode: 'development',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    resolve: {
        extensions: ['.vue', '.js'],
        alias: {
            // Use the ESM module version for packagers
            'vue$': 'vue/dist/vue.esm.js',
            'jquery': 'jquery/dist/jquery.js',
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    compact: 'false'
                }
            },
            {
                test: /\.css$/,
                // no include since we want to handle bootstrap css in node_modules too
                use:
                    // both style-loader and css-loader are needed to parse style tags in vue-loader
                    // sass-loader needed for bootstrap, needs node-ass as well
                    ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
            inject: true
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jQuery",
            "window.jQuery": "jquery",
            Popper: ['popper.js', 'default']
        }),
    ],

    // for webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,   // needed by vue-router history mode
        compress: true,
        port: 9000
    }

};
