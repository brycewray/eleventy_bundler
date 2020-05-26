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
  
    <div class="border-t border-solid border-gray-900 dark:border-gray-100 block mt-8 mb-0 mr-auto ml-auto w-3/4 lg:w-1/2 xb:w-5/12 px-6" id="webmentions">
      <h3 class="mt-2 mb-4 italic text-center text-3xl tracking-tight">Webmentions</h3>
      ${wMentions.length > 0
        ? 
        `
        ${likesSize
          ? `<details>
              <summary class="md:text-2xl font-bold tracking-tight">Likes&nbsp;&nbsp;<span class="text-base font-normal">(${likesSize})</span></summary>
              <div>
              ${likes.map(like =>
                `<a href="${like.url}" class="border-0 no-underline" aria-label="${like.author.name}"><img class="inline h-12 w-12 object-cover mr-2 rounded-full u-photo lazy" loading="lazy" data-src="${like.author.photo}" alt="${like.author.name}"></a>`
              ).join('')}
              </div>
            </details>`
          : ``
        }
        ${repostsSize
          ? `<details>
              <summary class="md:text-2xl font-bold tracking-tight">Reposts&nbsp;&nbsp;<span class="text-base font-normal">(${repostsSize})</span></summary>
              <div>
              ${reposts.map(repost =>
                `<a href="${repost.url}" class="border-0 no-underline" aria-label="${repost.author.name}"><img class="inline h-12 w-12 object-cover mr-2 rounded-full u-photo lazy" loading="lazy" data-src="${repost.author.photo}" alt="${repost.author.name}"></a>`
              ).join('')}
              </div>
            </details>`
          : ``
        }
        ${repliesSize
          ? `<details>
              <summary class="md:text-2xl font-bold tracking-tight">Comments&nbsp;&bull;&nbsp;Replies&nbsp;&nbsp;<span class="text-base font-normal">(${repliesSize})</span></summary>
              <ol class="list-none p-0">
                ${replies.map(reply =>
                  `<li class="mt-8">
                    <article class="block h-cite">
                      <div class="flex items-center flex-wrap">
                        <a class="text-black dark:text-white flex items-center flex-wrap border-0 no-underline p-author h-card" href="${reply.url}" aria-label="${reply.author.name}"><img class="inline h-12 w-12 object-cover mr-2 rounded-full u-photo lazy" loading="lazy" data-src="${reply.author.photo}" alt="${reply.author.name}"><strong class="p-name text-base">${reply.author.name}</strong></a>&nbsp;<span class="text-sm"><time class="italic dt-published" datetime="${reply.published}">${this.readableDateFromISO(reply.published)}</time></span>
                      </div>
                      <div class="p-content pt-2 pl-2 text-base leading-normal">
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
              <summary class="md:text-2xl font-bold tracking-tight">Mentions&nbsp;&nbsp;<span class="text-base font-normal">(${mentionsSize})</span></summary>
              <ol class="list-none p-0">
                ${mentions.map(mention =>
                  `<li class="mt-8">
                    <article class="block h-cite">
                      <div class="flex items-center flex-wrap">
                        <a class="text-black dark:text-white flex items-center flex-wrap border-0 no-underline p-author h-card" href="${mention.url}" aria-label="${mention.author.name}"><img class="inline h-12 w-12 object-cover mr-2 rounded-full u-photo lazy" loading="lazy" data-src="${mention.author.photo}" alt="${mention.author.name}"><strong class="p-name text-base">${mention.author.name}</strong></a>&nbsp;<span class="text-sm"><time class="italic dt-published" datetime="${mention.published}">${this.readableDateFromISO(mention.published)}</time></span>
                      </div>
                      <div class="p-content text-base">
                        ${mention.content.html}
                      </div>
                    </article>
                  </li>`
                ).join('')}
              </ol>
            </details>`
          : ``
        }`
        : `<p class="text-center text-base">(No webmentions yet.)</p>`
      }
    </div>  
    `
  })
}
