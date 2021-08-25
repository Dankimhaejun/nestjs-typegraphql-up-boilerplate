const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/main.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  externals: [nodeExternals({})],
  resolve: {
    modules: ["node_modules"],
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
