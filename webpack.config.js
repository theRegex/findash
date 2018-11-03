const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WebpackCdnPlugin = require("webpack-cdn-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV === "production" || process.env.NODE_ENV === "performance";
const isPerformance = process.env.NODE_ENV === "performance";

module.exports = {
  mode: isProduction ? "production" : "development",

  devServer: (() => {
    if(isProduction) return {};
    return {
      contentBase: "./dist",
      historyApiFallback: true,
      hot: true,
      port: parseInt(process.env.PORT, 10) || 5000,
    }
  })(),

  devtool: isProduction ? "hidden-source-map" : "cheap-eval-source-map",

  entry: {
    app: "./src/index.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: (() => {
        if (isProduction) return '[name].[chunkhash].js';
        else return '[name].bundle.js';
    })(),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader",
            options: {
              babelrc: false,
              cacheDirectory: true,
              presets: [
                [
                  "@babel/preset-env",
                  {
                    "targets": "> 0.25%, not dead"
                  }
                ],
                "@babel/preset-react"
              ],
              plugins: [
                "emotion",
                "@babel/plugin-proposal-class-properties",
                "react-hot-loader/babel"
              ]
            }
          },
          {
            loader: "eslint-loader",
            options: {
              enforce: "pre",
              emitWarning: true,
              failOnWarning: false
            }
          }
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "stylelint-custom-processor-loader",
        options: {
          emitWarning: true
        }
      }, {
        test: /\.(svg|png|gif|jpe?g)$/,
        exclude: /node_modules/,
        use: [{
          loader: "file-loader",
          options: {
            name: "/[path][name].[ext]"
          }
        }]
      }
    ]
  },

  plugins: (() => {
    let pluginsList = [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
        cdnModule: "deps",
        filename: "index.html",
        title: "React Starter",
        inject: "body"
      }),
      new WebpackCdnPlugin({
        modules: {
          deps: [
            { name: "react", var: "React", path: `umd/react.${isProduction ? "production.min" : "development"}.js` },
            { name: "react-dom", var: "ReactDOM", path: `umd/react-dom.${isProduction ? "production.min" : "development"}.js` },
            { name: "react-router", var: "ReactRouter", path: "umd/react-router.min.js" },
            { name: "react-router-dom", var: "ReactRouterDOM", path: "umd/react-router-dom.min.js" },
          ]
        }
      })
    ];

    if(!isProduction) {
      pluginsList.push(
        new webpack.HotModuleReplacementPlugin()
      );
    }

    if (isProduction) {
      pluginsList.push(
        new CleanWebpackPlugin(["dist"], {
          exclude: ["favicon.ico", "manifest.json"]
        }),
        new webpack.HashedModuleIdsPlugin()
      );
    }

    if(isPerformance) {
      pluginsList.push(
        new BundleAnalyzerPlugin()
      );
    }
    return pluginsList;
  })(),

  optimization: {
    minimize: isProduction,
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
};
