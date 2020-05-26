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
  <img class="object-cover object-center h-full w-full containedImage" src="/images/${urlBase}-20.${ext}" srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `/images/${urlBase}-${size}.${ext} ${size}w, `
    }
  })
  stringtoRet += `/images/${urlBase}-${width}.${ext}" alt="${alt}" sizes="100vw" />
  </picture>
  <noscript>
    <img class="imgCover hero" loading="lazy" src="/images/${urlBase}-${width}.${ext}" alt="${alt}" />
  </noscript>`
  return `

  <main>

    <div class="w-full height-hero pt-12">
      ${stringtoRet}
    </div>
    ${
      (data.featured_image_caption)
      ? `<p class="text-center text-xs tracking-normal mt-1">${data.featured_image_caption}</p>`
      : ``
    }

    <div class="container px-8 lg:grid lg:grid-cols-5 lg:gap-16 xb:gap-32 lg:w-3/4 xb:w-7/12 mr-auto ml-auto">
      <div class="col-span-3 home-colOne">
        ${data.content}
      </div>
      <div class="col-span-2 border-black border-t lg:border-0 pt-4 lg:pt-0">
        <h2 class="h1 mb-4">Recent <a href="/posts/">posts</a></h2>
        ${
          data.collections.post.slice(0, 5).map(post =>
          `
        <div>
          <h2 class="h4 not-italic tracking-tight"><a href="${post.url}">${post.data.title}</a></h2>
          <p class="font-bold text-base mt-2 mb-0 leading-5">${post.data.subtitle}</p>
          <p class="text-xs tracking-normal mt-0 mb-1">
            Published: <time style="display: inline;" datetime="${(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}">${(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</time>
            ${
              post.data.lastmod
              ? `
            <br />Last modified: <time style="display: inline;" datetime="${(post.data.lastmod.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}))}">${(post.data.lastmod.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}))}</time>
              `
              : ``
            }
          </p>
          <p class="text-sm mt-2 mb-3">
            ${post.data.description}
          </p>
        </div>
          ` 
        ).join('')}

        <p><a href="/posts/"><strong>All ${data.collections.post.length} posts</strong></a> <span class="text-sm"><em>(listed five per page)</em></span></p>
        <!-- Twitter timeline used to go here -->
      </div>
    </div>
  </main>
  `
}
