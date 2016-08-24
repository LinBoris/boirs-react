var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.[hash].js"
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./src/index.html" }),
      new webpack.EnvironmentPlugin(["SERVER_URL"])
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel'
        }
      ]
    }
};
