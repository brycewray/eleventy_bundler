/* index-eleventy.js */

var req = require.context("../images", true, /\.(jpe?g|png|gif)$/)
req.keys().forEach(function(key){
  req(key)
})