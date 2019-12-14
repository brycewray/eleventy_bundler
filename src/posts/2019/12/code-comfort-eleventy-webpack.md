---
layout: layouts/posts/singleposthero.njk
tags: post
title: "Code comfort: Eleventy and webpack"
subtitle: "Peeking inside this site"
description: "Excerpts from my eleventy/webpack configuration."
date: 2019-12-14T10:37:00-06:00
#lastmod: t/k
discussionId: "2019-12-code-comfort-eleventy-webpack"
idx: 41
featured_image: /images/markus-spiske-Skf7HxARcoc-unsplash_1920x1080-1920.jpg
featured_image_base: markus-spiske-Skf7HxARcoc-unsplash_1920x1080
featured_image_width: 1920
featured_image_ext: jpg
featured_image_alt: "Computer code on a monitor"
featured_image_caption: "Image: Markus Spiske; unsplash.com"
---

*Following up on my [recent post](/posts/2019/12/packing-up) about how I got this site back to my favorite [static site generator](https://staticgen.com) (SSG), [Eleventy](https://11ty.dev), and also provided some enhancements with the [webpack](https://webpack.js.org) bundler&nbsp;app&nbsp;.&nbsp;.&nbsp;.*

As I mentioned, my process in making this happy transition was much easier than it might have been, thanks to the publicly available code from others who'd done it before me. Thus, I want to follow their kind example---to a point.

I'm not (yet) willing to put this site's repo into public territory. Maybe I'll cook up a "starter" version and make *that* public. However, in the meantime, I *will* put in this post some of the key config code I used. That's what helped me the most; perhaps it will do the same for others. (If you'd really like a "starter" repo instead, let me know either here or via [Twitter](https://twitter.com/BryceWrayTX).[^webmentions] No promises, but I'll see what I can do.)

[^webmentions]: I'm also belatedly trying to get [webmentions](https://indieweb.org/Webmention) going, too; it's still a work in progress as I write this. Bear with me. Right now, I'm hung up trying to get the right production method for providing Netlify with environment variables (in this case, the token required to make webmentions appear). Let's just say the process has some "[interesting](https://community.netlify.com/t/common-issue-using-environment-variables-on-netlify-correctly/267)" aspects. But I'm asking. While I wait for an answer, please note that the code herein **does&nbsp;not** include anything specific to webmentions, since (a.) it's a work in progress and (b.) I don't want to confuse you. (I'm confused enough for all of us right now.)

## How this site is arranged

Before I give you the config files, here's a look at how I structure the site. Note that I have the view set so items with names starting with dots---*e.g.*, .gitignore---don't appear. That's the default view.

{% lazypicture "site_files_2019-12-13_943x1411", "png", 943, "macOS screen capture: Finder-based list of this site's basic file structure"  %}

(And, yes, my Mac's Finder uses a [Firefox](https://mozilla.org/firefox) icon for JSON files. I don't know why or when that started.)

## A tale of three webpack config files

A lot of tutorials for using webpack will have you go through the motions of constructing a `webpack.config.js` file, only to come in when things get hot and heavy and say, "*Au contraire*, sucker! Actually, you need *separate* configuration files for development and production."

Not gonna pull that one on ya.

You *can* do it with just a `webpack.config.js` file---one to rule them all, so to speak---but just about all the best-practices-kinda-stuff you'll see says to set things up as follows, so that's what I'm telling you, too:[^configNames]

[^configNames]: You can call them whatever you want as long as each ends with a *.js* extension, but using names like these are sufficiently standard that, when you look at other people's code, you'll probably find the examples more helpful than if you go into "[Silly Walks](https://en.wikipedia.org/wiki/The_Ministry_of_Silly_Walks)" mode and call them *fred.js*, *wilma.js*, and *pebbles.js*, or somesuch.

- `webpack.dev.js`---Contains only config code for *development*. Or, to put it another way: the code in this file is *not* intended for when you actually build your site on, say, [Netlify](https://www.netlify.com).

- `webpack.prod.js`---You guessed it: this is the first file's bro, except that this one contains only config code for *production*.

- `webpack.common.js`---Contains everything you'll need for *either* production or development. The other two files ***merge*** this content when they're run, thus ensuring everything happens as it should. Having this separate file, rather than duplicating code between the other two files, is DRY-friendly (well, [maybe](https://thevaluable.dev/dru-principle-cost-benefit-example)) and thus keeps peace among all of [Babbage](https://www.computerhistory.org/babbage/)'s descendants, genetic or otherwise.

With that understood, let's take a look at each of my versions of these boys. (Please note that here, as on all my site pages with code blocks, the blocks scroll horizontally as needed.)

### `webpack.dev.js`

```js

const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map'
})

```

### `webpack.prod.js`

```js
const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "production" 
})

```

### `webpack.common.js`

```js

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: [
    './src/assets/js/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '_site'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '/css/[name].css',
      chunkFilename: '[id].css',
      // ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      { 
        test: /\.js$/, loader: "babel-loader"
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
            },
          },
          // 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            }
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
              quality: 60,
              sizes: [
                20, // placeholder for lqip
                300,
                600,
                4000, // using a ridiculous width so it will process the original (won't make a bigger version)
              ],
              placeholder: false, // otherwise, bundle is too big
              name: 'images/[name]-[width].[ext]',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
            minimize: true,
          },
        },
      },
    ],
  },
}

```

## Configuring Eleventy itself

As for `eleventy.js`, the main config file for Eleventy (thankfully, no separate `.dev` and `.prod` versions here), it goes like this:

```js
const { DateTime } = require("luxon")
const pluginRss = require("@11ty/eleventy-plugin-rss")
const htmlmin = require('html-minifier')

module.exports = function (config) {

  config.addPassthroughCopy('src/assets/js')
  
  config.addPassthroughCopy('robots.txt')

  config.addPlugin(pluginRss)

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
  // https://www.11ty.dev/docs/languages/markdown/
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

  config.addTransform("htmlmin", function(content, outputPath) {
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

```

## `package.json`

By now, the more observant among you, having seen certain items mentioned in these files above, may be wondering what's in the `package.json` file. Wonder no longer---although, I caution you, it changes a lot as I find new things to add (and/or decide to delete things that I no longer use) and, truthfully, there are things in there I no longer use but simply haven't gotten around to opening up a can of `npm uninstall` on 'em as yet:

```json
{
  "name": "eleventy_bundler",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "ssgquiet": "npx @11ty/eleventy --serve --quiet",
    "clean": "rimraf _site",
    "start": "npm-run-all clean --parallel dev:*",
    "dev:eleventy": "ELEVENTY_ENV=development eleventy --serve --quiet",
    "dev:webpack": "webpack --config webpack.dev.js",
    "build": "npm-run-all clean --parallel prod:*",
    "prod:eleventy": "ELEVENTY_ENV=production eleventy --output=./_site",
    "prod:webpack": "webpack -p --config webpack.prod.js"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@11ty/eleventy": "^0.9.0",
    "@11ty/eleventy-plugin-rss": "^1.0.7",
    "@babel/core": "^7.7.4",
    "@babel/preset-env": "^7.7.6",
    "@babel/register": "^7.7.4",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.0.6",
    "babel-plugin-prismjs": "^1.1.1",
    "babel-preset-env": "^1.7.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-hot-loader": "^1.4.4",
    "css-loader": "^3.2.0",
    "debug": "^4.1.1",
    "del": "^5.1.0",
    "eleventy-rss-helper": "^1.2.0",
    "fibers": "^4.0.2",
    "file-loader": "^5.0.2",
    "glob": "^7.1.6",
    "html-loader": "^0.5.5",
    "html-webpack-inline-source-plugin": "0.0.10",
    "image-webpack-loader": "^6.0.0",
    "imagemin-webpack-plugin": "^2.4.2",
    "img-loader": "^3.0.1",
    "inline-source-map": "^0.6.2",
    "instant.page": "^3.0.0",
    "lazysizes": "^5.2.0-beta1",
    "lqip-loader": "^2.2.0",
    "luxon": "^1.21.3",
    "markdown-it": "^10.0.0",
    "markdown-it-footnote": "^3.0.2",
    "markdown-it-prism": "^2.0.3",
    "mini-css-extract-plugin": "^0.8.0",
    "node-fetch": "^2.6.0",
    "node-loader": "^0.6.0",
    "node-sass": "^4.13.0",
    "npm-run-all": "^4.1.5",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "posthtml": "^0.12.0",
    "prismjs": "^1.17.1",
    "responsive-loader": "^1.2.0",
    "rimraf": "^3.0.0",
    "rss": "^1.2.2",
    "sass": "^1.23.7",
    "sass-loader": "^8.0.0",
    "sharp": "^0.23.3",
    "style-loader": "^1.0.1",
    "svg-url-loader": "^3.0.3",
    "typeface-roboto": "0.0.75",
    "typeface-roboto-mono": "0.0.75",
    "url-loader": "^3.0.0",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dashboard": "^3.2.0",
    "webpack-dev-server": "^3.9.0",
    "webpack-merge": "^4.2.2"
  },
  "dependencies": {
    "dotenv": "^8.2.0",
    "html-minifier": "^4.0.0"
  }
}

```

## Copy-pasta meal?

So, there you go. If you see anything that's helpful to your project, by all means, [copy-pasta](https://knowyourmeme.com/memes/copypasta) to your heart's content. If nothing else, perhaps the `package.json` file will give you some hints about cool npm packages to try if you, too, decide to weld Eleventy and webpack---which, I assure you, is a [worthy endeavor](/posts/2019/12/packing-up).