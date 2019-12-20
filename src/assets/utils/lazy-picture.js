/* 
shortcode takes the following form...
--- name 'lazypicture' rather than 'lazy-picture' comes from config in .eleventy.js
{% lazypicture [parameters separated by commas] %}
*/

module.exports = (urlBasic, ext, width, alt) => {
  return `
  <figure>
    <div class="loader">
      <img 
      class="lazyload"
      data-sizes="auto"
      data-srcset="
      /images/${urlBasic}-300.${ext} 300w, 
      /images/${urlBasic}-600.${ext} 600w,
      /images/${urlBasic}-${width}.${ext} ${width}w,
      " 
      src="/images/${urlBasic}-${width}.${ext}" 
      alt="${alt}"
      />
      <img 
      class="frozen" 
      src="/images/${urlBasic}-20.${ext}" 
      alt="Blurry version for effects - ${alt}"
      />
    </div>
  </figure>
  `
}