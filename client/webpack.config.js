// webpack & tailwind setup is based on https://dev.to/j45t7/webpack-tailwind-css-setup-35bm

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true,
        // assetModuleFilename: "[name][ext]", // ???
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /(node_modules)/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.js$/i,
                exclude: /(node_modules)/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: [
                      [
                        "@babel/preset-env",
                        { useBuiltIns: "usage", corejs: 3, targets: "defaults" },
                      ],
                    ],
                  },
                },
              }
        ]
    },
    devServer: {
        port: 8080,
        hot: true,
        contentBase: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
            template: "./src/index.html"
        }),
    ],
};