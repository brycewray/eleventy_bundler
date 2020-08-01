const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: [
    './src/assets/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '_site'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '/css/[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  node: {
    global: true,
    fs: 'empty',
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        use: 'babel-loader',
        exclude: '/node_modules'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: __dirname + '/postcss.config.js',
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
            minimize: true,
          },
        },
      },
    ],
  },
}