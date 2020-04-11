// Borrowed shamelessly from Reuben Lillie's code:
// https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/_includes/shortcodes/index.js

var postslist = require('./postslist')
var paginationNav = require('./pagination-nav')
var pageDate = require('./page-date')

module.exports = eleventyConfig => {
  postslist(eleventyConfig)
  paginationNav(eleventyConfig)
  pageDate(eleventyConfig)

  return
}