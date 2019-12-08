const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = merge(common, {
  mode: "development",
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '_site'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '/css/[name].css',
      chunkFilename: '[id].css',
      // ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          // 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            }
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              // adapter: require('responsive-loader/sharp'),
              // quality: 60,
              sizes: [
                20, // placeholder for lqip
                300,
                600,
                4000, // using a ridiculous width so it will process the original (won't make a bigger version)
              ],
              placeholder: false, // otherwise, bundle is too big -- unless you'll use the placeholder data, no point
              // placeholderSize: 40,
              name: 'images/[name]-[width].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                // options to come
              },
              pngquant: {
                quality: [
                  0.65, 
                  0.90,
                ],
              },
              gifsicle: {
                interlaced: false,
              },
              /*
              webp: {
                quality: 75,
              },
              */
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
            minimize: true
          },
        },
      },
    ],
  },
})
