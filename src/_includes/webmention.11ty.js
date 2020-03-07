module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('webmention', function(data) {
    return `
    <!-- from https://github.com/maxboeck/eleventy-webmentions/blob/master/_includes/webmention.njk -->
  
    <article class="webmention h-cite" id="webmention-${data.webmention['wm-id']}">
      <div class="webmention__meta">
        ${
          (webmention.author !== null) 
          ? `<a class="webmention__author p-author h-card u-url" href="${data.webmention.url}" target="_blank" rel="noopener noreferrer">
            ${(data.webmention.author.photo !== null)
              ? `<img class="webmention__author__photo u-photo" src="${data.webmention.author.photo}" alt="${data.webmention.author.name}">`
              : `<img class="webmention__author__photo" src="/images/webmention-avatar-default.svg" alt="">`
            }
            <strong class="p-name">{{ webmention.author.name }}</strong>
          </a>`
          : `<span class="webmention__author">
            <img class="webmention__author__photo" src="/images/webmention-avatar-default.svg" alt="">
            <strong>Anonymous</strong>
          </span>`
        }
    
        ${(data.webmention.published !== null)
          ? `<time class="webmention__pubdate dt-published" datetime="${data.webmention.published}">${data.webmention.published}</time><!-- orig was dd LLL yyyy -->`
          : ``
        }
      </div>
      <div class="webmention__content p-content">
        ${data.webmention.content.value}
      </div>
    </article>  
    `
  })
}

