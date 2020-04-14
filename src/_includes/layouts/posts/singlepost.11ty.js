exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return `
<main>
  <div class="background-hero-div">
    <div class="background-hero-title-block-fit">
      <h1 class="background-hero-title-text">${data.title}</h1>
      <h2 class="background-hero-subtitle-text">
        ${
          data.subtitle
            ? data.subtitle
            : `&nbsp;`
        }
      </h2>
      <p class="background-hero-description-text">${data.description}</p>
      <p class="background-hero-p-text">
        <span style="font-variant: small-caps">published:</span>&nbsp; <strong>${(data.page.date).toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'})}</strong><br />
        <span class="pokey">
        ${
          data.lastmod !== null && data.lastmod !== undefined
          ? `<span style="font-variant: small-caps">last modified:</span>&nbsp;${(data.lastmod).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'})}`
          : `&nbsp;`
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

  ${data.title != "Home page" && data.title != "Posts"
    ? `
      ${data.oldComments
        ? data.oldComments
        : ``
      }
      ${this.webmentionList(data)}`
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