const analyticsCode = require('../../../assets/utils/analytics.js')

module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('headTag', function(data) {

    return `
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=10"><!-- due to IE 11 issue with TWCSS -->
    <meta name="generator" content="Eleventy - 11ty - https://11ty.dev - v${require(`@11ty/eleventy/package.json`).version}" />        
    ${
      (data.title == "Home page")
      ? `
      <title>${data.siteparams.siteTitle}</title> 
      <meta property="og:title" content="${data.siteparams.siteTitle}" />
      `
      : `
      <title>${data.title} | ${data.siteparams.siteTitle}</title>
      <meta property="og:title" content="${data.title} | ${data.siteparams.siteTitle}" />
      `
    }

    <link rel="preconnect" href="https://res.cloudinary.com">
    <link rel="preconnect" href="https://boa.brycewray.com">

    <!-- IndieWeb -->
    ${
      (data.title == "Home page")
      ? `
      <link rel="me" href="https://twitter.com/BryceWrayTX" />
      <link rel="me" href="https://github.com/brycewray" />
      `
      : ``
    }
    <link rel="webmention" href="https://webmention.io/brycewray.com/webmention" />
    <link rel="pingback" href="https://webmention.io/brycewray.com/xmlrpc" />

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta property="og:image" content="https://brycewray.com/images/typewriter-monochrome_2242164_1280x720.jpg" />
    ${
      (data.title == "Home page")
      ? `
      <meta name="description" content="${data.siteparams.siteDescription}" />
      <meta property="og:description" content="${data.siteparams.siteDescription}" />
      `
      : (data.description != "")
        ? `
      <meta name="description" content="${data.description}">
        `
      : ``
    }
    ${
      (data.page.url !== null)
      ? `
      <meta property="og:url" content="${data.siteparams.siteURLforOG}${data.page.url}" />
      `
      : `<meta property="og:url" content="${data.siteparams.siteURLforOG}" />`
    }

    <!-- Twitter meta -->
    <meta name="twitter:site" content="@BryceWrayTX">
    <meta name="twitter:creator" content="@BryceWrayTX">
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://brycewray.com/images/typewriter-monochrome_2242164_1280x720.jpg" />
    ${
      data.title !== "Home page"
      ? `
      <meta name="twitter:description" content="${data.description}" />
      <meta name="twitter:title" content="${data.title}" />
      `
      : `
      <meta name="twitter:description" content="${data.siteparams.siteDescription}" />
      <meta name="twitter:title" content="${data.siteparams.siteTitle}" />
      `
    }

    <!-- **** BEGINNING, favicons **** -->

    <!-- generics -->
    <link rel="icon" href="/images/icons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" href="/images/icons/favicon-57x57.png" sizes="57x57">
    <link rel="icon" href="/images/icons/favicon-76x76.png" sizes="76x76">
    <link rel="icon" href="/images/icons/favicon-96x96.png" sizes="96x96">
    <link rel="icon" href="/images/icons/favicon-128x128.png" sizes="128x128">
    <link rel="icon" href="/images/icons/favicon-192x192.png" sizes="192x192">
    <link rel="icon" href="/images/icons/favicon-228x228.png" sizes="228x228">

    <!-- iOS -->
    <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png">

    <!-- Android -->
    <link rel="shortcut icon" sizes="196x196" href="/images/icons/favicon-196x196.png">

    <!-- Windows 8, IE 10 -->
    <meta name="msapplication-TileColor" content="#FFFFFF">
    <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png">

    <!-- Windows 8.1 and up, IE 11 -->
    <meta name="msapplication-config" content="/browserconfig.xml">

    <!-- **** CONCLUSION, favicons **** -->

    <link rel="preload" as="style" href="/css/index.css" />
    <link rel="stylesheet" href="/css/index.css" type="text/css" />
    <style>@-moz-document url-prefix() {.lazy:-moz-loading {visibility:hidden;}}.ieOnly {display: none;}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.ieOnly {display: block;}.notInIE{display: none;}}</style>

    <noscript>
      <!-- Dark mode for Twitter items if browser blocks JS at bottom; it’s debatable whether it’s needed since non-JS Twitter is pretty spare and mostly adheres to other CSS, but we’ll do it just to be consistent -->
      <meta name="twitter:widgets:theme" content="dark">
      <meta name="twitter:widgets:link-color" content="#00bbff">
    </noscript>

    ${analyticsCode}
  </head>
    `

  })

}