const { svgNavIcon } = require( '../../../assets/svg/svgs.js')

module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('siteHeader', function() {

    return `
    <header class="h-12 bg-blue-700 w-full fixed p-0 mt-0 z-50">
      <p class="text-white font-bold mt-2 pt-1 text-lg ml-4 md:ml-8 lg:ml-10 xb:ml-16 w-full"><span class="site-logo-holder"><a href="/" class="text-white no-underline border-b-0 active:text-gray-400 hover:text-gray-400" aria-label="This site's “BW” logo">${svgNavIcon}</a></span>&nbsp;&nbsp;<a href="/" class="text-white active:text-gray-400 hover:text-gray-400" style="border: 0 !important; text-decoration: none !important;">BryceWray.com</a></p>
      <input type="checkbox" id="nav-toggle" class="nav-toggle" aria-hidden="true" />
      <label for="nav-toggle" class="nav__icon" aria-hidden="true">
        Expand the menu
          <span class="nav__icon-line"></span>
          <span class="nav__icon-line"></span>
          <span class="nav__icon-line"></span>
      </label>
      <nav role="navigation" class="nav">
        <ul class="nav__items">
          <li class="nav__item">
            <a href="/about/" title="About">About</a>
          </li>
          <li class="nav__item">
            <a href="/posts/" title="Posts">Posts</a>
          </li>
        </ul>
      </nav>
    </header>
    `

  })

}