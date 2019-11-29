const { DateTime } = require("luxon")
const pluginRss = require("@11ty/eleventy-plugin-rss")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
// const lazyImagesPlugin = require("eleventy-plugin-lazyimages")

module.exports = function (config) {

  // config.addPassthroughCopy('src/assets/css')
  config.addPassthroughCopy('src/assets/images')
  config.addPassthroughCopy('src/assets/js')


  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy")
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  config.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('MMMM d, yyyy')
  })

  config.addFilter('dateStringISO', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd')
  })

  // https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
  config.addLayoutAlias("posts", "src/_includes/layouts/posts/singlepost.njk")

  /* Markdown plugins */
  // https://www.11ty.io/docs/languages/markdown/
  // --and-- https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
  // --and-- https://github.com/planetoftheweb/seven/blob/master/.eleventy.js
  let markdownIt = require("markdown-it")
  let markdownItPrism = require("markdown-it-prism")
  let markdownItFootnote = require("markdown-it-footnote")
  let markdownItOpts = {
    html: true,
    linkify: true,
    typographer: true
  }
  const markdownEngine = markdownIt(markdownItOpts)
  markdownEngine.use(markdownItFootnote)
  markdownEngine.use(markdownItPrism)
  config.setLibrary("md", markdownEngine)

  config.addShortcode("lazypicture", require("./src/assets/utils/lazy-picture.js"))

  /* pathPrefix: "/"; */
  return {
    dir: {
      input: 'src', // <--- everything else in 'dir' is relative to this directory! https://www.11ty.io/docs/config/#directory-for-includes
      data: '../_data',
      includes: '_includes'
    },
    templateFormats: [
      'html',
      'md',
      'njk'
    ],
    passthroughFileCopy: true,
  }
}