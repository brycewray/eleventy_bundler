const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin') 
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const devMode = process.env.NODE_ENV !== 'production'

const config = {
  watch: true,
  entry: {
    index: './src/assets/js/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '_site'),
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', options: {
              url: false, 
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', 
            options: {
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '/css/ofotigrid.css'
    })
  ],
  mode : devMode ? 'development' : 'production'
}

module.exports = config