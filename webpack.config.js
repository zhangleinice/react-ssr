const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// browser
const browserConfig = {
    entry: './src/browser/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        // use rules instead of loaders
        rules: [
            // {
            //     test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            //     loader: "file-loader",
            //     options: {
            //       name: "public/media/[name].[ext]",
            //       publicPath: url => url.replace(/public/, "")
            //     }
            // },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                // 不需要打包
                exclude: path.resolve(__dirname, "node_modules"),
                // 只打包src文件夹下，优化打包速度
                // include: path.resolve(__dirname, "./src/"),
                query: {
                  // latest包含了es6，7，8全部
                  presets: ['es2015', 'react']
                //   "presets": ["preset-env", "react"]
                }
                // query: { presets: ["react-app"] }
            },
            {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({
                  // fallback在未提取CSS时应该使用的loader
                  fallback: "style-loader",
                  // 使用什么loader去提取
                  use: ['css-loader']
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
          filename: "[name].css"
        })
    ]
};

// module.exports = browserConfig;
// server
const serverConfig = {
    entry: './src/server/index.js',
    target: 'node',
    mode: 'development',
    output: {
        path: __dirname,
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
        //   {
        //     test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        //     loader: "file-loader",
        //     options: {
        //       name: "public/media/[name].[ext]",
        //       publicPath: url => url.replace(/public/, ""),
        //       emit: false
        //     }
        //   },
          {
            test: /\.css$/,
            use: [
              {
                loader: "css-loader/locals"
              }
            ]
          },
        //   {
        //     test: /js$/,
        //     exclude: /(node_modules)/,
        //     loader: "babel-loader",
        //     query: { presets: ["react-app"] }
        //   }
            // {
            //     test: /\.css$/,
            //     loaders: ExtractTextPlugin.extract({
            //     // fallback在未提取CSS时应该使用的loader
            //     fallback: "style-loader",
            //     // 使用什么loader去提取
            //     use: ['css-loader?minimize']
            //     })
            // },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                // 不需要打包
                exclude: path.resolve(__dirname, "node_modules"),
                query: {
                    // latest包含了es6，7，8全部
                    presets: ['es2015', 'react']
                }
            },
        ]
    },
    // plugins: [
    //     new ExtractTextPlugin({
    //       filename: "[name].css"
    //     })
    // ]
};

module.exports = [browserConfig, serverConfig];