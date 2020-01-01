const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require('path')
const glob = require('glob-all')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g)
  }
}
module.exports = merge(common, {
  mode: "production",
  plugins: [
    new PurgecssPlugin({
      paths: glob.sync([
        path.join(__dirname, './src/**/*.html'),
        path.join(__dirname, './src/**/*.njk'),
      ]),
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html', 'js', 'njk']
        },
      ],
    }),
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
  ],
})