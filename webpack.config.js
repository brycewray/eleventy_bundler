const webpack = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

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
        test: [/.css$|.scss$/],
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'head',
              injectType: 'singletonStyleTag',
            },
          },
          'css-loader',
          'sass-loader',
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
}

module.exports = config