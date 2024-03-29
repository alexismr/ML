/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const ForkTsCheckerWebpackPlugin  = require("fork-ts-checker-webpack-plugin");
const ESLintPlugin  = require("eslint-webpack-plugin");
const { HotModuleReplacementPlugin }  =require( "webpack");



console.log('@@@@@@@@@ USING PRODUCTION @@@@@@@@@@@@@@@');

module.exports = {
    mode: 'production',
    target: 'web',
    performance: { 
      hints: false
    },
    entry: {
        app: path.join(__dirname, '../src', 'index.tsx')
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        path: path.resolve(__dirname, '../dist/')
    },
    resolve: {
      plugins: [new TsconfigPathsPlugin({
        baseUrl: path.resolve(__dirname, '.'),
        configFile: path.resolve(__dirname, './tsconfig.prod.json'),
        mainFields: ['browser', 'main'],
       })],
        extensions: ['.ts', '.tsx', '.js']
    },
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
                parser: {
                  system: true
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                parser: {
                  system: true
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
                parser: {
                  system: true
                }
              },
              {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                exclude: /node_modules/,
                use: 'file-loader?name=assets/[name]-[hash:6].[ext]',
                parser: {
                  system: true
                }
              },
              {
                test: /favicon.ico$/,
                use: 'file-loader?name=/[name].[ext]',
                parser: {
                  system: true
                }
              }
        ]
    },
    plugins: [
       new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "../public", "index.html"),
          favicon: './public/favicon.ico'
        }),

        new MiniCssExtractPlugin({    
          filename: '[name].css',
          chunkFilename: '[id].css'
        }),
        new HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
          async: false,
        }),
        new ESLintPlugin({
          extensions: ["js", "jsx", "ts", "tsx"],
        }),
        new CopyWebpackPlugin({
          patterns: [{ from: './src/assets/img/*.*', to: 'assets/img/[name][ext]'}]
          }
        )


      ],

      optimization: {
        minimize: true,
        minimizer: [ new CssMinimizerPlugin() ],
      },
      
}

