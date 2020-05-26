const sizeOf = require('image-size')
const respSizes = [300, 450, 600, 750, 900, 1050, 1200, 1350, 1500]
const srcDir = 'src/images'

exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  var fImg = data.featured_image
  var alt = data.featured_image_alt
  var ext = fImg.substring((fImg.lastIndexOf('.') + 1))
  var urlBase = fImg.slice(0, -4)
  var dimensions = sizeOf(`${srcDir}/${fImg}`) // the REAL, original file
  var width = dimensions.width
  var stringtoRet = ``
  stringtoRet = `<picture>
  <source type="image/webp" srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `/images/${urlBase}-${size}.webp ${size}w, `
    }
  })
  stringtoRet += `/images/${urlBase}-${width}.webp ${width}w" sizes="100vw" />
  <img class="imgCover hero" src="/images/${urlBase}-20.${ext}" srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `/images/${urlBase}-${size}.${ext} ${size}w, `
    }
  })
  stringtoRet += `/images/${urlBase}-${width}.${ext} ${width}w" alt="${alt}" sizes="100vw" />
  </picture>
  <noscript>
    <img class="imgCover" src="/images/${urlBase}-${width}.${ext}" alt="${alt}" />
  </noscript>`
  return `
<main class="pt-12">
  <div class="background-hero-image-div">
    ${stringtoRet}
    <div class="background-hero-title-block-fit">
      <div class="background-hero-title-text">
        <h1 class="text-center text-4xl md:text-5xl xl:text-6xl md:text-left tracking-tight leading-tight mb-2 text-white">${data.title}</h1>
        <h2 class="text-center text-2xl md:text-left md:text-3xl xl:text-4xl leading-tight tracking-tight text-white italic">
          ${
            data.subtitle
              ? data.subtitle
              : `&nbsp;`
          }
        </h2>
        <p class="hidden not-italic md:block md:text-xl tracking-tight md:mt-3 mb-0 text-white">${data.description}</p>
        <p class="text-base text-center md:text-right mt-3 mb-0 text-white">
          <span style="font-variant: small-caps">published:</span>&nbsp; <strong>${(data.page.date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'})}</strong><br />
          <span class="text-sm">
          ${
            data.lastmod !== null && data.lastmod !== undefined
            ? `<span style="font-variant: small-caps">last modified:</span>&nbsp;${(data.lastmod).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'})}`
            : `&nbsp;`
          }
          </span>
        </p>
        <p class="text-center text-white text-xs mt-4 mb-0 md:mb-1 pb-1">
        ${data.featured_image_caption
          ? `${data.featured_image_caption}`
          : `&nbsp;`
        }
        </p>
      </div>
    </div>
  </div>

  <div class="sm:w-5/6 md:w-4/5 xl:w-1/2 mt-10 mr-auto ml-auto px-6 lg:px-16">
    <article>
      ${data.content}
    </article>
  </div>

  ${data.title != "Home page" && data.title != "Posts" && data.title != "The obligatory About Me page"
    ? `
      ${data.oldComments
        ? data.oldComments
        : ``
      }
      ${this.webmentionList(data)}`
    : ``
  }
  
  ${data.title != "The obligatory About Me page"
    ? `<div class="w-full px-8 md:px-0 bg-blue-700 align-middle mt-10 mb-10">
    <h3 class="text-center text-3xl tracking-normal mb-0 pt-2"><a href="/posts" class="border-transparent text-blue-100 hover:text-white italic">Other posts</a></h3>
    ${data.nextPost && data.nextPost.url !== null
      ? `<p class="text-center mt-2 mb-2 text-xl text-white leading-tight tracking-tight">
        <strong>Next</strong>: 
        <a class="border-transparent text-blue-100 hover:text-white hover:border-blue-100" href="${data.nextPost.url}">${data.nextPost.data.title}</a>
      </p>`
      : ``
    }
    ${data.prevPost && data.prevPost.url !== null
      ? `<p class="text-center pb-4 my-0 text-xl text-white leading-tight tracking-tight">
        <strong>Previous</strong>: 
        <a class="border-transparent text-blue-100 hover:text-white hover:border-blue-100" href="${data.prevPost.url}">${data.prevPost.data.title}</a>
      </p>`
      : `<p class="text-xs my-0 py-0 leading-tight">&nbsp;</p>`
    }
    </div>`
    : ``
  }
</main>
`
}