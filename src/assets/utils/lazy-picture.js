/* 
shortcode takes the following form...
--- name 'lazypicture' rather than 'lazy-picture' comes from config in .eleventy.js
{% lazypicture [parameters separated by commas] %}
*/

module.exports = (urlBasic, ext, width, alt) => {
  return `
  <picture class="noIE">
  <source type="image/webp" 
  data-srcset="/images/${urlBasic}-300.webp 300w, 
  /images/${urlBasic}-600.webp 600w, 
  /images/${urlBasic}-${width}.webp ${width}w" />
  <img class="lazy noIE containedImage" 
  src="/images/${urlBasic}-20.${ext}" alt="${alt}" 
  data-src="/images/${urlBasic}-300.${ext}" 
  data-srcset="/images/${urlBasic}-300.${ext} 300w, 
  /images/${urlBasic}-600.${ext} 600w, 
  /images/${urlBasic}-${width}.${ext} ${width}w" 
  alt="${alt}" />
  </picture>
  <img class="IEonly" src="/images/${urlBasic}-${width}.${ext}" alt="${alt}" />
  <noscript>
  <img class="containedImage" loading="lazy" src="/images/${urlBasic}-${width}.${ext}" alt="${alt}" />
  </noscript>
  `
}
