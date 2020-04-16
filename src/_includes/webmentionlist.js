module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('webmentionList', function(data) {

    var absoluteUrl = data.metadata.url + data.page.url
    var mentions = this.webmentionsForUrl(data.webmentions.children, absoluteUrl)
    
    return `
  
    <div class="webmentions" id="webmentions">
      <h3>Webmentions</h3>
      ${mentions.length > 0
        ? `
        <ol class="webmentions__list">
          ${mentions.map(webmention =>
            `<li class="webmentions__item">
              <article class="webmention h-cite" id="webmention-${webmention['wm-id']}">
                <div class="webmention__meta">
                  ${webmention.author
                    ? `<a class="webmention__author p-author h-card u-url" href="${webmention.url}" target="_blank" rel="noopener noreferrer">
                      ${webmention.author.photo
                        ? `<img class="webmention__author__photo u-photo" src="${webmention.author.photo}" alt="${webmention.author.name}">`
                        : `<img class="webmention__author__photo" src="/images/webmention-avatar-default.svg" alt="(No image available)">`
                      }
                      <strong class="p-name">${webmention.author.name}</strong>
                      </a>`
                    : `<span class="webmention__author">
                        <img class="webmention__author__photo" src="/images/webmention-avatar-default.svg" alt="(No image available)">
                        <strong>Anonymous</strong>
                      </span>`
                  }
                  ${webmention.published
                    ? `&nbsp;<span class="legal"><time class="webmention__pubdate dt-published" datetime="${webmention.published}">${this.readableDateFromISO(webmention.published)}</time></span>`
                    : ``
                  }
                </div>
                <div class="webmention__content p-content">
                  ${webmention.content.value}
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
