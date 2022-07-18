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
                      "@babel/preset-react",
                    ],
                  },
                },
              }
        ]
    },
    devServer: {
      port: 8080,
      hot: "only",
      static: {
        directory: path.join(__dirname, './'),
        serveIndex: true,
      },
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./src/index.html" }),
    ],
};