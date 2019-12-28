const { DateTime } = require("luxon")
const pluginRss = require("@11ty/eleventy-plugin-rss")
const htmlmin = require('html-minifier')
const sanitizeHTML = require('sanitize-html')

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets/js')

  eleventyConfig.addPassthroughCopy('src/images/webmention-avatar-default.svg')
  
  eleventyConfig.addPassthroughCopy('robots.txt')

  eleventyConfig.addPlugin(pluginRss)

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

  eleventyConfig.addFilter('dateFromTimestamp', timestamp => {
    return DateTime.fromISO(timestamp, { zone: 'utc' }).toJSDate()
  })

  eleventyConfig.addFilter('dateFromRFC2822', timestamp => {
    return DateTime.fromJSDate(timestamp).toISO()
  })

  // https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
  eleventyConfig.addLayoutAlias("posts", "src/_includes/layouts/posts/singlepost.njk")

  /* Markdown plugins */
  // https://www.11ty.dev/docs/languages/markdown/
  // --and-- https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
  // --and-- https://github.com/planetoftheweb/seven/blob/master/.eleventy.js
  let markdownIt = require("markdown-it")
  let markdownItFootnote = require("markdown-it-footnote")
  let markdownItPrism = require('markdown-it-prism')
  let markdownItOpts = {
    html: true,
    linkify: true,
    typographer: true
  }
  const markdownEngine = markdownIt(markdownItOpts)
  markdownEngine.use(markdownItFootnote)
  markdownEngine.use(markdownItPrism)
  eleventyConfig.setLibrary("md", markdownEngine)

  eleventyConfig.addShortcode("lazypicture", require("./src/assets/utils/lazy-picture.js"))

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }
    return content
  })

  /* === START, webmentions stuff === */
  // https://mxb.dev/blog/using-webmentions-on-static-sites/
  // https://sia.codes/posts/webmentions-eleventy-in-depth/
  
  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n)
    }
    return array.slice(0, n)
  })

  
  // Webmentions Filter
  eleventyConfig.addFilter('webmentionsForUrl', (webmentions, url) => {
    const allowedTypes = ['mention-of', 'in-reply-to', 'like-of', 'repost-of', 'bookmark-of']
    const clean = content =>
      sanitizeHTML(content, {
        allowedTags: ['b', 'i', 'em', 'strong', 'a'],
        allowedAttributes: {
          a: ['href']
        }
      })

    return webmentions
      .filter(entry => entry['wm-target'] === url)
      .filter(entry => allowedTypes.includes(entry['wm-property']))
      .filter(entry => !!entry.content)
      .map(entry => {
        const { html, text } = entry.content
        entry.content.value = html ? clean(html) : clean(text)
        return entry
      })
  })

  /* === END, webmentions stuff === */

  /* === START, prev/next posts stuff === */
  // https://github.com/11ty/eleventy/issues/529#issuecomment-568257426

  eleventyConfig.addCollection("posts", function(collection) {
    const coll = collection.getFilteredByTag("post")

    for(let i = 0; i < coll.length; i++) {
      const prevPost = coll[i-1]
      const nextPost = coll[i+1]

      coll[i].data["prevPost"] = prevPost
      coll[i].data["nextPost"] = nextPost
    }

    return coll;
  })

  /* === END, prev/next posts stuff === */

  
  /* pathPrefix: "/"; */
  return {
    dir: {
      input: 'src', // <--- everything else in 'dir' is relative to this directory! https://www.11ty.dev/docs/config/#directory-for-includes
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