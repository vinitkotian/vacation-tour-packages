const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "vacation-tours-bundle.js",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.?js$|\.?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.?css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
