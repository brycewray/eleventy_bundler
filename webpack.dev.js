const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const fs = require('fs')

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['_site'] },
      ghostMode: false,
      notify: false,
      watch: true,
      open: false, // won't automatically launch in default browser when started
      /*
      ***
      
      Following 'callbacks' option code combines instructions from...
      - https://www.browsersync.io/docs/options/#option-callbacks
      - https://www.11ty.dev/docs/quicktips/not-found/#with-serve
      ... to provide true 404 functionality during dev.
      Thanks also to Reuben Lillie for his code here:
      - https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/.eleventy.js

      **Note**: 
      Your console likely will get the following Node.js warning when using this, 
      but it doesn't appear to impair Eleventy serve ops or cause other issues:

      "[DEP0079] DeprecationWarning: Custom inspection function on Objects via .inspect() is deprecated"

      ***
      */
      callbacks: {
        ready: function(err, bs) {
          console.log(bs.options.get('urls'))
          bs.addMiddleware("*", (req, res) => {
            const content_404 = fs.readFileSync('_site/404.html')
            res.write(content_404)
            res.writeHead(404)
            res.end()
          })
        }
      }
    }),
  ],
  watch: true,
  devtool: 'inline-source-map'
})