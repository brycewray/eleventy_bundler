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

  <div class="container container-comments">
    <p>&nbsp;</p>
    <!-- Comments code -->
    <script>talkyardServerUrl="${data.siteparams.talkyardServerUrl}";</script>
    <script async defer src="${data.siteparams.talkyardScriptUrl}"></script>
    <div class="talkyard-comments" data-discussion-id="${data.discussionId}" data-iframe-title="Comments section on brycewray.com, powered by Talkyard" style="margin-top: 3em;">
      <noscript>Please enable Javascript to view comments.</noscript>
      <!-- commenting this out because it's in the footer ... <p class="legal text-muted" style="margin-top: 2em;">Comments powered by <a href="https://www.talkyard.io">Talkyard</a>.</p> -->
    </div>
    <!-- end, Comments code -->
  </div>
  
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