// Borrowed shamelessly from Reuben Lillie's code:
// https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/_includes/shortcodes/archive.js

module.exports = eleventyConfig =>

  eleventyConfig.addShortcode('postslist', function (data, arr) {
    var l10n = data.site[data.locale]
    return `
    <section>
      ${arr.map(item =>
        `<article>
          <time>${this.pageDate(item.data)}</time>
          <h2>
            <a href="${item.data.page.url}">${item.data.title}</a>
          </h2>
          <p>${item.data.description}</p>
        </article>`).join('')}
    </section>
    `
  })