const sanitizeHTML = require('sanitize-html')

exports.render = data => `
  <!-- from https://github.com/maxboeck/eleventy-webmentions/blob/master/_includes/webmention.njk -->

  <article class="webmention h-cite" id="webmention-${data.webmention['wm-id']}">
    <div class="webmention__meta">
      ${data.webmention.author
        ? `<a class="webmention__author p-author h-card u-url" href="${data.webmention.url}" target="_blank" rel="noopener noreferrer">
          ${data.webmention.author.photo
            ? `<img class="webmention__author__photo u-photo" src="${data.webmention.author.photo}" alt="${data.webmention.author.name}">`
            : `<img class="webmention__author__photo" src="/images/webmention-avatar-default.svg" alt="">`
          }
          <strong class="p-name">${data.webmention.author.name}</strong>
          </a>`
        : `<span class="webmention__author">
            <img class="webmention__author__photo" src="/images/webmention-avatar-default.svg" alt="">
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
`

