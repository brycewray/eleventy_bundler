/* 
shortcode takes the following form...
--- name 'lazypicture' rather than 'lazy-picture' comes from config in .eleventy.js
{% lazypicture [parameters separated by commas] %}
*/

module.exports = (urlBasic, ext, width, alt) => {
  return `
  <picture>
  <source type="image/webp" srcset="/images/${urlBasic}-20.webp" data-srcset="/images/${urlBasic}-300.webp 300w, /images/${urlBasic}-600.webp 600w, /images/${urlBasic}-${width}.webp ${width}w" />
  <source type="image/${ext}" srcset="/images/${urlBasic}-20.${ext}" data-srcset="/images/${urlBasic}-300.${ext} 300w, /images/${urlBasic}-600.${ext} 600w, /images/${urlBasic}-${width}.${ext} ${width}w" />
  <img class="lazyload blur-up containedImage" src="/images/${urlBasic}-${width}.${ext}" alt="${alt}" />
  </picture>
  <noscript>
  <img class="containedImage" loading="lazy" src="/images/${urlBasic}-${width}.${ext}" alt="${alt}" />
  </noscript>
  `
}