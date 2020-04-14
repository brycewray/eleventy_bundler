module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode('2019-06-ahoy-mate', function() {
    return `
    <div class="webmentions">
      <h3 class="ctr">Comments</h3>
      <p class="legal ctr">
        (Imported from previous comments host, <a href="https://talkyard.io">Talkyard</a>.)
      </p>
      <p class="commentOpen"><strong>Andrew Canion</strong> <em>2019-06-16</em></p>
      <p class="commentBody">Hi Bryce. I'm a new reader to your site. I found you when I was searching for information about MailMate. Thanks for this great overview. I've also enjoyed some of your other articles. I've now subscribed to your RSS feed, as I think your writing is great.</p>
    
      <p class="commentOpen"><strong>Bryce Wray</strong> <em>2019-06-17</em></p>
      <p class="commentBody">Not sure which of my relatives posted these kind comments under Mr. Canion&rsquo;s name :-) &mdash; but I appreciate them tremendously.</p>
    
      <p class="commentOpen"><strong>Andrew Canion</strong> <em>2019-08-21</em></p>
      <p class="commentBody">I finally got around to writing <a href="https://canion.me/mailmate-review" rel="nofollow">my own review of MailMate</a>.</p>
    
      <p class="commentOpen"><strong>Bryce Wray</strong> <em>2019-08-22</em></p>
      <p class="commentBody">And I like yours better. :-) I don&rsquo;t qualify as a power email user, particularly because I don&rsquo;t keep my business email with my personal email (don&rsquo;t want my employer&rsquo;s chosen MDM software on my primary iPhone, and such access isn&rsquo;t allowed on my Mac even if I <strong>did</strong> want it), so I would urge those who do so to read your review. You noted many superb MailMate features I either neglected to mention or didn&rsquo;t find germane to my more mundane use case.</p>
    
      <p class="commentOpen"><strong>Bryce Wray</strong> <em>2019-09-28</em></p>
      <p class="commentBody">Later note . . .</p>
      <p class="commentBody">To be fair: I should also note that, as I&rsquo;d originally suspected, MailMate has turned out to be more than my relatively pedestrian scenario really needs &mdash; but I&rsquo;m very much <em><strong>not</strong></em> sorry that I bought a license and became a patron. Dr. Nielsen&rsquo;s work is easily worthy of both.</p>
    </div>
    `
  })
}