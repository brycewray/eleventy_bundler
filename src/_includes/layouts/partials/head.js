module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('headTag', function(data) {

    return `
  
  <head>
    <meta name="generator" content="Eleventy - https://11ty.dev" />
        
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

    <meta property="og:image" content="https://brycewray.com/images/typewriter-monochrome_2242164_1280x720-1280.jpg" />

    ${
      (data.title == "Home page")
      ? `
      <meta name="description" content="${data.siteparams.siteDescription}">
      <meta property="og:description" content="${data.siteparams.siteDescription}" />
      `
      : (data.description != "")
        ? `
      <meta name="description" content="${data.description}">
        `
      : ``
    }

    ${
      (data.final_url !== null)
      ? `
      <meta property="og:url" content="{{ siteparams.siteBaseURL }}{{ final_url }}" />
      `
      : ``
    }

    <!-- Twitter meta -->
    <meta name="twitter:site" content="@BryceWrayTX">
    <meta name="twitter:creator" content="@BryceWrayTX">
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://brycewray.com/images/typewriter-monochrome_2242164_1280x720-1280.jpg" />
    ${
      (data.title != "Home page")
      ? `
      <meta name="twitter:description" content="${data.description}" />
      <meta name="twitter:title" content="${data.title}" />
      `
      : `
      <meta name="twitter:description" content=${data.siteparams.siteDescription}" />
      <meta name="twitter:title" content="${siteparams.siteTitle}" />
      `
    }

    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57-57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60-60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72-72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76-76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114-114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120-120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144-144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152-152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180-180.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32-32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96-96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16-16.png">
    <meta name="msapplication-TileImage" content="/images/ms-icon-144x144-144.png">

    <link rel="stylesheet" href="/css/main.css" type="text/css">
    <noscript><style>.lazyload {display: none !important;}</style></noscript>

    <noscript>
      <!-- Dark mode for Twitter items if browser blocks JS at bottom; it’s debatable whether it’s needed since non-JS Twitter is pretty spare and mostly adheres to other CSS, but we’ll do it just to be consistent -->
      <meta name="twitter:widgets:theme" content="dark">
      <meta name="twitter:widgets:link-color" content="#00bbff">
    </noscript>
  </head>
  `

  })

}