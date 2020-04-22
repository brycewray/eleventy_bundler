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
      ${wMentions.length > 0
        ? 
        `
        ${likesSize
          ? `<details>
              <summary class="h4">Likes</summary>
              <ul class="webmentions__list_facepile">
              ${likes.map(like =>
                `<li><a href="${like.url}" class="u-url"><img class="webmention__author__photo u-photo" src="${like.author.photo}" alt="${like.author.name}"></a></li>`
              ).join('')}
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
              ).join('')}
              </ul>
            </details>`
          : ``
        }
        ${repliesSize
          ? `<details>
              <summary class="h4">Comments&nbsp;&bull;&nbsp;Replies</summary>
              <ol class="webmentions__list">
                ${replies.map(reply =>
                  `<li class="webmentions__item">
                    <article class="webmention h-cite">
                      <div class="webmention__meta">
                        <a class="webmention__author p-author h-card u-url" href="${reply.url}"><img class="webmention__author__photo u-photo" src="${reply.author.photo}" alt="${reply.author.name}"><strong class="p-name">${reply.author.name}</strong></a>&nbsp;<span class="legal"><time class="webmention__pubdate dt-published" datetime="${reply.published}">${this.readableDateFromISO(reply.published)}</time></span>
                      </div>
                      <div class="webmention__content p-content">
                        ${reply.content.html}
                      </div>
                    </article>
                  </li>`
                ).join('')}
              </ol>
            </details>`
          : ``
        }
        ${mentionsSize
          ? `<details>
              <summary class="h4">Mentions</summary>
              <ol class="webmentions__list">
                ${mentions.map(mention =>
                  `<li class="webmentions__item">
                    <article class="webmention h-cite">
                      <div class="webmention__meta">
                        <a class="webmention__author p-author h-card u-url" href="${mention.url}"><img class="webmention__author__photo u-photo" src="${mention.author.photo}" alt="${mention.author.name}"><strong class="p-name">${mention.author.name}</strong></a>&nbsp;<span class="legal"><time class="webmention__pubdate dt-published" datetime="${mention.published}">${this.readableDateFromISO(mention.published)}</time></span>
                      </div>
                      <div class="webmention__content p-content">
                        ${mention.content.html}
                      </div>
                    </article>
                  </li>`
                ).join('')}
              </ol>
            </details>`
          : ``
        }`
        : `<p class="ctr">(No webmentions yet.)</p>`
      }
    </div>  
    `
  })
}
