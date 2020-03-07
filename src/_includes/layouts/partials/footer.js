    let copyYear = new Date().getFullYear()

    module.exports = function(eleventyConfig) {

      eleventyConfig.addShortcode('siteFooter', function(data) {

        let webmentionDate = (data.page.date).toISOString()

        return `

      <footer class="ctr">
        <p><a href="https://github.com/brycewray/eleventy_bundler" target="_blank" rel="noopener" style="border-bottom: none;"><img src="/images/GitHub_octocat_logo_blue_48x48-48.png" style="height: 24px; width: 24px;" alt="GitHub"></a>&nbsp;&nbsp;<a href="https://twitter.com/BryceWrayTX" target="_blank" rel="noopener" style="border-bottom: none;"><img src="/images/twitter-2430933_48x48-48.png" style="height: 24px; width: 24px;" alt="Twitter"></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/brycewray" target="_blank" rel="noopener" style="border-bottom: none;"><img src="/images/linked-in-2674741_48x48-48.png" style="height: 24px; width: 24px;" alt="LinkedIn"></a>&nbsp;&nbsp;<a href="/feed.xml" style="border-bottom: none;"><img src="/images/rss-2440955_48x48-48.png" style="height: 24px; width:24px;" alt="RSS"></a></p>
        <p class="legaltxt">
          &copy;&nbsp;${copyYear}&nbsp;<a class="h-card" rel="me" href="https://brycewray.com">Bryce Wray</a>.<br />
            Site built and managed with <a href="https://jamstack.org" target="_blank" rel="noopener">the JAMstack</a>, <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener">CSS Grid</a>, <a href="https://www.apple.com/macos" target="_blank" rel="noopener">macOS</a>, <a href="https://www.apple.com/ios" target="_blank" rel="noopener">iOS</a>, <a href="https://daringfireball.net/projects/markdown" target="_blank" rel="noopener">Markdown</a>, <span class="text-nowrap">time, and&nbsp;love.</span> <span class="text-nowrap">Hosted by&nbsp;<a href="https://netlify.com" target="_blank" rel="noopener">Netlify</a></span>.
          </p>
          <!-- for webmentions -->
          <hr style="margin-top: 2em;" />
          <h4 class="ctr pokey">Information for webmentions</h4>
          <img class="u-photo" alt="This site's 'BW' logo" src="/images/favicon-512x512-512.png" style="width: 45px; height: 45px;" />
          <p class="p-note legal">Unrepentant advocate for and user of the Oxford comma (sorry,&nbsp;AP). Webmentions&nbsp;of others&rsquo; content do&nbsp;not necessarily constitute endorsements. Comments&nbsp;and opinions expressed herein are my&nbsp;own, unless otherwise&nbsp;noted.</p>
          ${
            (data.title !=="Posts")
            ? `
            <h4 class="ctr legal">About this page</h4>
            <article class="h-entry legal">
              <div class="e-content p-name">${data.title}
              ${(data.subtitle !== null) 
                ? `&nbsp;&nbsp;|&nbsp;&nbsp;${data.subtitle}`
                : ``
              }
              ${data.description !== null
                ? `&nbsp;&nbsp;|&nbsp;&nbsp;${data.description}`
                : ``
              }
              </div>
            <a class="u-url" href="${data.page.url}">
              Published <time class="dt-published">${webmentionDate}</time>
            </a>
            <link rel="author" href="https://brycewray.com/" />
          </article>`
          : ``
          }
      </footer>          
        `
      })
    
    }