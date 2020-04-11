// Based shamelessly on Reuben Lillie's code:
// https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/_includes/shortcodes/page-date.js

module.exports = eleventyConfig =>
  eleventyConfig.addShortcode('pageDate', data => {
    var date = data.page.date
    var locale
    data.locale
      ? locale = data.page.locale
      : locale = data.site.defaultLocale
    var options = data.site[data.locale].dateOptions
    // Check that `date` is a JavaScript `Date` object.
    return Object.prototype.toString.call(date) === "[object Date]"
      ? `${date.toLocaleDateString(locale, options)}`
      : ''
  })
