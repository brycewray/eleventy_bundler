const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: 'development',
  /* == uncomment this only if using webpack server instead of Eleventy's Browsersync 
  devServer: {
    contentBase: './_site/',
    watchContentBase: true
  },
  */
  watch: true,
  devtool: 'inline-source-map'
})
