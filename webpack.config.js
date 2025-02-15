const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: isProduction ? "bundle.[contenthash].js" : "bundle.js",
      publicPath: "/",
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          type: "asset/resource",
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new Dotenv(),
      ...(isProduction ? [new MiniCssExtractPlugin()] : []),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 3000,
      historyApiFallback: true,
      proxy: [
        {
          context: ["/proxy"],
          target: "http://localhost:3001",
        },
      ],
    },
  };
};
