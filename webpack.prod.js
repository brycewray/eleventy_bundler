const path = require('path')
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const glob = require('glob')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const PATHS = {
  src: path.join(__dirname, 'src'),
}

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new PurgecssPlugin({
      paths: () => glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
      // whitelistPatterns: [/flex$/],
    }),
  ]/*,
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'css/main',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },*/
})