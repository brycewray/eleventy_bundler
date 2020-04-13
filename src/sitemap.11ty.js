exports.data = {
  permalink: 'sitemap.xml'
}

exports.render = data => `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${
      data.collections.post.reverse().map(post =>
        `
        <url>
          <loc>${data.siteparams.siteBaseURL}${post.url}</loc>
          ${
            post.data.lastmod
            ? `<lastmod>${this.dateStringISO(post.data.lastmod)}</lastmod>`
            : `<lastmod>${this.dateStringISO(post.date)}</lastmod>`
          }
        </url>
        `
      ).join('')
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