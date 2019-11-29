/* index-eleventy.js */

// require ('../images/angry-bird-2234295_1920x1080.jpg') // test
var req = require.context("../images", true, /\.(jpe?g|png|gif)$/)
req.keys().forEach(function(key){
  req(key)
})