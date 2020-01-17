/* 
shortcode takes the following form...
--- name 'lazypicture' rather than 'lazy-picture' comes from config in .eleventy.js
{% lazypicture [parameters separated by commas] %}
*/

module.exports = (urlBasic, ext, width, alt) => {
  return `
  <img 
      class="lazyload blur-up containedImage"
      data-sizes="auto" 
      srcset="/images/${urlBasic}-20.${ext}" 
      data-srcset="
      /images/${urlBasic}-300.${ext} 300w, 
      /images/${urlBasic}-600.${ext} 600w,
      /images/${urlBasic}-${width}.${ext} ${width}w,
      " 
      src="/images/${urlBasic}-${width}.${ext}" 
      alt="${alt}"
    />
  `
}
