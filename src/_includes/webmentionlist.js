module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('webmentionList', function(data) {

    var absoluteUrl = data.metadata.url + data.page.url
    var wMentions = this.webmentionsForUrl(data.webmentions.children, absoluteUrl)
    var likes = this.webmentionsByType(wMentions, 'like-of')
    var likesSize = likes.length
    var replies = this.webmentionsByType(wMentions, 'in-reply-to')
    var repliesSize = replies.length
    var reposts = this.webmentionsByType(wMentions, 'repost-of')
    var repostsSize = reposts.length
    var mentions = this.webmentionsByType(wMentions, 'mention-of')
    var mentionsSize = mentions.length
    
    return `
  
    <div class="webmentions" id="webmentions">
      <h3>Webmentions</h3>
      ${wMentions.length > 0 // if there are any WMs **at all**
        ? `
        ${wMentions.map(wMention =>
          `${likesSize
            ? `<details>
                <summary class="h4">Likes</summary>
                <ul class="webmentions__list_facepile">
                ${likes.map(like =>
                  `<li><a href="${like.url}" class="u-url"><img class="webmention__author__photo u-photo" src="${like.author.photo}" alt="${like.author.name}"></a></li>`
                )}
                </ul>
              </details>`
            : ``
          }
          ${repostsSize
            ? `<details>
                <summary class="h4">Reposts</summary>
                <ul class="webmentions__list_facepile">
                ${reposts.map(repost =>
                  `<li><a href="${repost.url}" class="u-url"><img class="webmention__author__photo u-photo" src="${repost.author.photo}" alt="${repost.author.name}"></a></li>`
                )}
                </ul>
              </details>`
            : ``
          }
          ${repliesSize
            ? ``
            : ``
          }
          ${mentionsSize
            ? ``
            : ``
          }
          <ol class="webmentions__list">
            <li class="webmentions__item">
              <article class="webmention h-cite" id="webmention-${wMention['wm-id']}">
                <div class="webmention__meta">
                  ${wMention.author
                    ? `<a class="webmention__author p-author h-card u-url" href="${wMention.url}" target="_blank" rel="noopener noreferrer">
                      ${wMention.author.photo
                        ? `<img class="webmention__author__photo u-photo" src="${wMention.author.photo}" alt="${wMention.author.name}">`
                        : `<img class="webmention__author__photo" src="/images/webmention-avatar-default.svg" alt="(No image available)">`
                      }
                      <strong class="p-name">${wMention.author.name}</strong>
                      </a>`
                    : `<span class="webmention__author">
                        <img class="webmention__author__photo" src="/images/webmention-avatar-default.svg" alt="(No image available)">
                        <strong>Anonymous</strong>
                      </span>`
                  }
                  ${wMention.published
                    ? `&nbsp;<span class="legal"><time class="webmention__pubdate dt-published" datetime="${wMention.published}">${this.readableDateFromISO(wMention.published)}</time></span>`
                    : ``
                  }
                </div>
                <div class="webmention__content p-content">
                  ${wMention.content.value}
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
