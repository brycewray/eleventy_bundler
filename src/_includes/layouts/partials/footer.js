let copyYear = new Date().getFullYear()
const { svgNavIcon, svgFooterIcon, svgGitHubIcon, svgTwitterIcon, svgLinkedInIcon, svgRSSIcon } = require( '../../../assets/svg/svgs.js')

module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('siteFooter', function(data) {

    return `
    <footer class="text-center pb-6">
      <div class="w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
        <p class="text-xs inline-flex mt-4 mb-4"><a href="https://github.com/brycewray/eleventy_solo" target="_blank" rel="noopener" class="mb-0 border-transparent" aria-label="GitHub">${svgGitHubIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/BryceWrayTX" target="_blank" rel="noopener" class="mb-0 border-transparent" aria-label="Twitter">${svgTwitterIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/brycewray" target="_blank" rel="noopener" class="mb-0 border-transparent" aria-label="LinkedIn">${svgLinkedInIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/feed.xml" class="mb-0 border-transparent" aria-label="RSS">${svgRSSIcon}</a></p>
        <p class="text-xs">
          &copy;&nbsp;${copyYear}&nbsp;<a class="h-card" rel="me" href="https://brycewray.com">Bryce Wray</a>.<br />
          Site built and managed with <a href="https://jamstack.org" target="_blank" rel="noopener">the Jamstack</a>, <a href="https://11ty.dev" target="_blank" rel="noopener">Eleventy</a>, <a href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind CSS</a>, <a href="https://www.apple.com/macos" target="_blank" rel="noopener">macOS</a>, <a href="https://www.apple.com/ios" target="_blank" rel="noopener">iOS</a>, <a href="https://daringfireball.net/projects/markdown" target="_blank" rel="noopener">Markdown</a>, <span class="text-nowrap">time, and&nbsp;love.</span> <span class="text-nowrap">Hosted by&nbsp;<a href="https://netlify.com" target="_blank" rel="noopener">Netlify</a></span>.
        </p>
      </div>
      <!-- for webmentions -->
      <hr class="mt-8 border-black" />
      <div class="w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
        <p class="font-bold text-base tracking-tight mt-4 mb-2">Information for webmentions</p>
        <p class="inline-flex mt-0">${svgFooterIcon}</p>
        <p class="p-note text-xs leading-tight mt-0">Unrepentant advocate for and user of the Oxford comma (sorry,&nbsp;AP). Webmentions&nbsp;of others&rsquo; content do&nbsp;not necessarily constitute endorsements. Comments&nbsp;and&nbsp;opinions expressed herein are my&nbsp;own, unless otherwise&nbsp;noted.</p>
        ${data.title !="Posts"
        ? `<p class="font-bold text-center text-sm mt-4 mb-0 tracking-tight">About this page</p>
        <article class="h-entry text-xs leading-tight">
          <div class="e-content p-name">
          ${data.title}
            ${data.subtitle 
              ? `&nbsp;&nbsp;|&nbsp;&nbsp;${data.subtitle}`
              : ``
            }
            ${data.description 
              ? `&nbsp;&nbsp;|&nbsp;&nbsp;${data.description}`
              : ``
          }
          </div>
          <a class="u-url no-underline border-0 text-black dark:text-white tracking-normal" href="${data.page.url}">Published <time class="dt-published">${this.dateFromRFC2822(data.page.date)}</time>
          </a>
          <link rel="author" href="https://brycewray.com/" />
        </article>`
        : ``
        }
      </div>
    </footer>    
    `

  })

}