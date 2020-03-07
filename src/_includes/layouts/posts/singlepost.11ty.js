exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {

  let pubDate = (data.page.date).toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  })
  let modDate = (data.lastmod).toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  })

  return `
<main>
  <div class="background-hero-div">
    <div class="background-hero-title-block-fit">
      <h1 class="background-hero-title-text">${data.title}</h1>
      <h2 class="background-hero-subtitle-text">
        ${
          data.subtitle !== null
            ? data.subtitle
            : ``
        }
      </h2>
      <p class="background-hero-description-text">${data.description}</p>
      <p class="background-hero-p-text">
        <span style="font-variant: small-caps">published:</span>&nbsp; <strong>${pubDate}</strong><br />
        <span class="pokey">
        ${
          modDate !== null
          ? `<span style="font-variant: small-caps">last modified:</span>&nbsp;${modDate}`
          : ``
        }
        </span>
      </p>
    </div>
  </div>

  <div class="container-narrower">
    <article class="article">
      ${data.content}
    </article>
  </div>

  ${
    data.title !== "Home page" && data.title !== "Posts"
    ? `
    <!-- from https://github.com/maxboeck/eleventy-webmentions/blob/master/_includes/webmention.njk -->
  
    <article class="webmention h-cite" id="webmention-${data.webmention}['wm-id']">
      <div class="webmention__meta">
        ${
          (data.webmention.author !== null) 
          ? `<a class="webmention__author p-author h-card u-url" href="${data.webmention.url}" target="_blank" rel="noopener noreferrer">
            ${(data.webmention.author.photo !== null)
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
    : ``
  }
  
  ${data.title != "The obligatory About Me page"
    ? `<div class="bg-dark">
    <h3 class="ctr wht"><a href="/posts" style="border-bottom: 0;">Other posts</a></h3>
    ${data.nextPost && data.nextPost.url !== null
      ? `<p class="ctr">
        <strong>Next</strong>: 
        <a class="next" href="${data.nextPost.url}">${data.nextPost.data.title}</a>
      </p>`
      : ``
    }
    ${data.prevPost && data.prevPost.url !== null
      ? `<p class="ctr">
        <strong>Previous</strong>: 
        <a class="previous" href="${data.prevPost.url}">${data.prevPost.data.title}</a>
      </p>`
      : ``
    }
    </div>`
    : ``
  }
`
}