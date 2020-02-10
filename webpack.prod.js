const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: false
            },
          },
        ],
      },
    }),
    new ImageminWebpackPlugin({
      pngquant: {
        speed: 10,
        quality: 50-80,
      },
      gifsicle: {
        optimizationLevel: 2,
        colors: 64,
      },
      plugins: [
        imageminMozjpeg({
          quality: 75,
          progressive: true,
        }),
      ],
    }),
  ],
})