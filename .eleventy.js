const { DateTime } = require("luxon")
const pluginRss = require("@11ty/eleventy-plugin-rss")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
// const lazyImagesPlugin = require("eleventy-plugin-lazyimages")

module.exports = function (eleventyConfig) {

  // eleventyConfig.addPassthroughCopy('src/assets/css')
  eleventyConfig.addPassthroughCopy('src/assets/images')
  eleventyConfig.addPassthroughCopy('src/assets/js')


  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy")
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('MMMM d, yyyy')
  })

  eleventyConfig.addFilter('dateStringISO', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd')
  })

  // https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
  eleventyConfig.addLayoutAlias("posts", "_includes/layouts/posts/singlepost.njk")

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
  eleventyConfig.setLibrary("md", markdownEngine)

  /* pathPrefix: "/"; */
  return {
    dir: {
      input: 'src',
      data: '../_data'
    },
    templateFormats: [
      'html',
      'md',
      'njk'
    ],
    passthroughFileCopy: true,
  }
}