/* index.js */

require('dotenv').config()

require("typeface-roboto")
require("typeface-roboto-mono")

import '../scss/ofotigrid.scss'

import 'lazysizes'
import 'lazysizes/plugins/respimg/ls.respimg'
import 'lazysizes/plugins/object-fit/ls.object-fit'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/blur-up/ls.blur-up'
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks'
import 'lazysizes/plugins/progressive/ls.progressive'
import 'lazysizes/plugins/bgset/ls.bgset'
// lazysizes.cfg.blurupMode = 'auto' // uses blur-up with only non-cached images (https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/blur-up)

import 'prismjs'

import 'instant.page' // until there's a webpack-friendly version of flying-pages

var req = require.context("../../images", true, /\.(jpe?g|png|gif)$/)
req.keys().forEach(function(key){
  req(key)
})

// --- start, twitterMeta ---

/* detect dark or light mode and handle Twitter embeds accordingly */
var metaTwitterTheme = document.createElement('meta');
var metaTwitterLink = document.createElement('meta');

function catchDark(e) {
  if (e.matches) {
  // dark mode
    metaTwitterTheme.setAttribute('name', 'twitter:widgets:theme');
    metaTwitterTheme.setAttribute('content', 'dark');
    metaTwitterLink.setAttribute('name', 'twitter:widgets:link-color');
    metaTwitterLink.setAttribute('content', '#00bbff');
  } else {
    // light mode
    metaTwitterTheme.setAttribute('name', 'twitter:widgets:theme');
    metaTwitterTheme.setAttribute('content', 'light');
    metaTwitterLink.setAttribute('name', 'twitter:widgets:link-color');
    metaTwitterLink.setAttribute('content', '#0033ff');
  }
}

document.getElementsByTagName('head')[0].appendChild(metaTwitterTheme);
document.getElementsByTagName('head')[0].appendChild(metaTwitterLink);

var e = window.matchMedia('(prefers-color-scheme: dark)');
catchDark(e);
e.addListener(catchDark);
// --- end, twitterMeta ---
