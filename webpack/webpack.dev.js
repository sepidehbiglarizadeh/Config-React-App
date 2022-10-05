const webpack = require("webpack");
const webpackCommon = require("./webpack.common");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NAME": JSON.stringify("Sepideh"),
    }),
  ],
};
