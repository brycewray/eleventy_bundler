module.exports = function(eleventyConfig) {

  import sanitizeHTML from 'sanitize-html'

  var absoluteUrl = data.metadata.url + page.url
  var mentions = data.webmentions.children[absoluteUrl]

  eleventyConfig.addShortcode('webmentionList', function(data) {

    return `
    <!-- from https://github.com/maxboeck/eleventy-webmentions/blob/master/_includes/webmentionlist.njk -->
  
    <!-- first part handled in [exports.data] section in original template -->
    <div class="webmentions" id="webmentions">
      <h3>Webmentions</h3>
      ${mentions
        ? `
        <div class="webmentions__facepile">
          ${mention.reverse().map(webmention =>
            `<img src="${webmention.author.photo ? webmention.author.photo : `/images/webmention-avatar-default.svg`}" title="${webmention.author.name}" alt="${webmention.author.name}" class="webmentions__face" />`
            ).join('')
          }
        </div>
  
        <ol class="webmentions__list">
          ${mention.reverse().map(webmention =>
            `<li class="webmentions__item">
              <article class="webmention h-cite" id="webmention-${data.webmention['wm-id']}">
                <div class="webmention__meta">
                  ${data.webmention.author
                    ? `<a class="webmention__author p-author h-card u-url" href="${data.webmention.url}" target="_blank" rel="noopener noreferrer">
                      ${data.webmention.author.photo
                        ? `<img class="webmention__author__photo u-photo" src="${data.webmention.author.photo}" alt="${data.webmention.author.name}">`
                        : `<img class="webmention__author__photo" src="/images/webmention-avatar-default.svg" alt="(No image available)">`
                      }
                      <strong class="p-name">${data.webmention.author.name}</strong>
                      </a>`
                    : `<span class="webmention__author">
                        <img class="webmention__author__photo" src="/images/webmention-avatar-default.svg" alt="(No image available)">
                        <strong>Anonymous</strong>
                      </span>`
                  }
                  ${data.webmention.published
                    ? `<time class="webmention__pubdate dt-published" datetime="${(data.webmention.published).toISOString()}">${(data.webmention.published).toISOString()}</time><!-- orig was dd LLL yyyy -->`
                    : ``
                  }
                </div>
                <div class="webmention__content p-content">
                  ${sanitizeHTML(data.webmention.content.value)}
                </div>
              </article>
            </li>`
            ).join('')
          }
        </ol>
        `
        : `<p class="ctr">(No mentions yet.)</p>`
      }
    </div>  
    `
  })
}
