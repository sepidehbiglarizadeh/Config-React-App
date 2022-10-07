const webpack = require("webpack");
const webpackCommon = require("./webpack.common");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NAME": JSON.stringify("Sepideh"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
