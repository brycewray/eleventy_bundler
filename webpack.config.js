const webpack = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const config = {
  watch: true,
  entry: './src/assets/js/index.js',
  output: {
    path: path.resolve(__dirname, '_site'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/.css$|.scss$/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              mimetype: 'application/font-woff',
              name: '/assets/fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
}

module.exports = config