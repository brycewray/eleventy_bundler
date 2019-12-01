// Based on code from Phil Hawksworth -- https://github.com/philhawksworth/rollyourownlazyload/tree/

// Generate a picture tag with just one tiny image src URL which used Netlify image transforms
// this will be our initial image to be progressively enhanced to load larger images

/* shortcode takes the following form...
--- name 'lazypicture' rather than 'lazy-picture' comes from config in .eleventy.js
{% lazypicture [parameters separated by commas] %}

*/

module.exports = (urlBasic, ext, width, alt) => {
/*
  return `
  <div class="lazywrapper">
    <div class="lazybox" style="padding-bottom: ${padBtm};">
      <img 
        class="lazybox-img lazyload" 
        data-sizes="auto"
        data-srcset="
        /images/${urlBasic}-300.${ext} 300w, 
        /images/${urlBasic}-600.${ext} 600w,
        /images/${urlBasic}-${width}.${ext} ${width}w,
        "
        data-lowsrc="/images/${urlBasic}-20.${ext}"
        alt="${alt}"
      />
    </div>
  </div>
  `
*/
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
      alt="${alt}"
      />
      <img 
      class="frozen" 
      src="/images/${urlBasic}-20.${ext}" 
      alt="${alt}"
      />
    </div>
  </figure>
  `
}