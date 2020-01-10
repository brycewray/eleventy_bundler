const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: [
    './src/assets/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '_site'),
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env'),
      systemvars: true,
    }),
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
        loader: "babel-loader"
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
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
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
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
              // quality: 60,
              sizes: [
                20, // placeholder for lqip
                300,
                600,
                4000, // using a ridiculous width so it will process the original (won't make a bigger version)
              ],
              placeholder: false, // otherwise, bundle is too big
              name: 'images/[name]-[width].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 60,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: [
                  0.65,
                  0.90
                ],
                speed: 4,
              },
              gifsicle: {
                optimizationLevel: 2,
              }
            }
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