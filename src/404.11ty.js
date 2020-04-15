exports.data = {
  locale: 'en',
  title: '404 - Page not found',
  layout: 'layouts/_default/base.11ty.js',
  permalink: '404.html'
}

// following (as opposed to 'module.exports = `` without 'data') needed to work with above front matter
exports.render = data => `
  <main>
    <h1 class="ctr" style="margin-top: 2em;">Page not found</h1>
    <div class="post-line"></div>
    <p class="ctr" style="margin-top: 2em;">Sorry, that page isn&rsquo;t on this site.</p>
    <p class="ctr" style="margin-bottom: 10em;">Please use the navigation menu, above, to find another&nbsp;page.</p>
  </main>
`
