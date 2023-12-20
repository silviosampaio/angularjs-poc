const path = require("path");

module.exports = {
  mode: "development",
  context: path.join(__dirname, "/app"),
  entry: "./app.ts",
  output: {
    path: path.join(__dirname, "/app"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/app"),
    },
    compress: true,
    port: 8501,
  },
};
