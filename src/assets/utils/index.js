// Borrowed shamelessly from Reuben Lillie's code:
// https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/_includes/shortcodes/index.js
// ... as of 2020-04-10

var postlists = require('./postslist')
var paginationNav = require('./pagination-nav')

module.exports = eleventyConfig => {
  postslists(eleventyConfig)
  paginationNav(eleventyConfig)

  return
}