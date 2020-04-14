module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode('2019-04-why-left-ulysses', function() {
    return `
    <div class="webmentions">
      <h3 class="ctr">Comments</h3>
      <p class="legal ctr">
        (Imported from previous comments host, <a href="https://talkyard.io">Talkyard</a>.)
      </p>
      <p class="commentOpen"><strong>Chris Rosser</strong> <em>2019-04-30</em></p>
      <p class="commentBody">An excellent and very well considered article as always. Thanks for posting it!</p>
    
      <p class="commentOpen"><strong>Bryce Wray</strong> <em>2019-05-01</em></p>
      <p class="commentBody">Thank you, sir. I&rsquo;d have liked nothing more than for it to have been a &ldquo;Why I was able to stick with Ulysses despite a few scary moments&rdquo; article, instead (although that would have been a goofy article title); but, sadly, the continuing glitches left me no good choice in the end.</p>
    </div>
    `
  })
}