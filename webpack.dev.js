const merge = require("webpack-merge")
// const webpack = require('webpack')
const common = require("./webpack.common.js")
// const WriteFilePlugin = require("write-file-webpack-plugin")
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  /* == uncomment this only if using webpack server instead of Eleventy's Browsersync */
  /*
  devServer: {
    contentBase: './_site/',
    overlay: true,
    hot: true,
    watchContentBase: true
  },
  plugins: [
    new WriteFilePlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  */
  /* == end of webpack server items == */
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['_site'] },
      notify: false,
      files: ['_site/**/*html'] // without this line, ignores HTML output from Eleventy
    })
  ],
  watch: true,
  devtool: 'inline-source-map'
})
