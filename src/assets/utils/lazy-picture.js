/* 
shortcode takes the following form...
--- name 'lazypicture' rather than 'lazy-picture' comes from config in .eleventy.js
{% lazypicture [parameters separated by commas] %}
*/

const sizeOf = require('image-size')
const respSizes = [300, 450, 600, 750, 900, 1050, 1200, 1350, 1500]
const srcDir = 'src/images'
 
module.exports = (url, alt) => {
  var ext = url.substring((url.lastIndexOf('.') + 1))
  var urlBase = url.slice(0, -4)
  var dimensions = sizeOf(`${srcDir}/${url}`) // the REAL, original file
  var width = dimensions.width
  var height = dimensions.height
  var stringtoRet = ``
  stringtoRet = `<picture>
  <source type="image/webp" data-srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `/images/${urlBase}-${size}.webp ${size}w, `
    }
  })
  stringtoRet += `/images/${urlBase}-${width}.webp ${width}w" data-sizes="100vw" />
  <img class="lazy containedImage" loading="lazy" src="/images/${urlBase}-20.${ext}" data-src="/images/${urlBase}-${width}.${ext}" data-srcset="`
  respSizes.forEach(size => {
    if (size <= width) {
      stringtoRet += `/images/${urlBase}-${size}.${ext} ${size}w, `
    }
  })
  stringtoRet += `/images/${urlBase}-${width}.${ext} ${width}w" alt="${alt}" width="${width}" height="${height}" data-sizes="100vw" />
  </picture>
  <noscript>
    <img class="containedImage" loading="lazy" src="/images/${urlBase}-${width}.${ext}" alt="${alt}" />
  </noscript>`

  return stringtoRet
}
