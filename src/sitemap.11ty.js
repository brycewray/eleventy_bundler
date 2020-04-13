exports.data = {
  permalink: '/sitemap.xml'
}

exports.render = function(data) {
  `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${
      data.collections.post.reverse().map(post =>
        `
        <url>
          <loc>${data.siteparams.siteBaseURL}${data.post.url}</loc>
          ${
            data.post.data.lastmod
            ? `<lastmod>${this.dateStringISO(data.post.data.lastmod)}</lastmod>`
            : `<lastmod>${this.dateStringISO(data.post.date)}</lastmod>`
          }
        </url>
        `
      )
    }
    <url>
      <loc>${data.siteparams.siteBaseURL}/about</loc>
      <lastmod>2019-09-08</lastmod>
    </url>
    <url>
      <loc>${data.siteparams.siteBaseURL}</loc>
      <lastmod>2019-09-08</lastmod>
    </url>
  </urlset>
  `
}