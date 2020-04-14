// .11ty.js version of 2019-07-lessons-learned.njk

exports.render = data => `
<div class="webmentions">
  <h3 class="ctr">Comments</h3>
  <p class="legal ctr">
    (Imported from previous comments host, <a href="https://talkyard.io">Talkyard</a>.)
  </p>
  <p class="commentOpen"><strong>Magnus Lindberg</strong> <em>2019-09-30</em></p>
  <p class="commentBody">Hi Bryce, I found a way to use both Git and cloud sync at the same time, for the same directory :- )<br />
  I <em>exclude</em> the <code>.git</code> directory from the cloud sync &mdash; that's why this works. (Otherwise I think the Git repo would &quot;self destruct&quot; itself, when <code>.git</code> internal changes from one laptop, attempts to sync with changes from another laptop :- ))</p>
  <p class="commentBody">I use Syncthing, here's my Syncthing config that excludes <code>.git</code> and other auto generated / downloaded things:</p>
  <pre class="language-bash"><code class="language-bash">$ cat .stignore-synced 
  // Add this single line to .stignore:
  // #include .stignore-synced
  .git/
  node_modules/</code></pre>
  <p class="commentBody">Actually, it's a bit more complicated:</p>
  <pre class="language-bash"><code class="language-bash">sync-root/
    project-X-laptop-A/
      .git/  &lt;— ignored
      project files ...
    project-X-laptop-B/
      .git/  &lt;— ignored
      ...</code></pre>
  <p class="commentBody">So, I have one synced root folder, and each laptop has its own sub folder, which is a Git repo with <code>.git/</code>excluded. And from laptop A, I work only in the <code>..-laptop-A</code> folder.  So as to not accidentally overwrite things I was working with on laptop B.</p>
  <p class="commentBody">... And every few days I Git-merge/rebase changes the two directories onto each other.</p>
  <p class="commentBody">Cheers</p>

  <p class="commentOpen"><strong>Bryce Wray</strong> <em>2019-09-30</em></p>
  <p class="commentBody">Very interesting! Will check into this.</p>
  <p class="commentBody">(To other readers: this gentleman is the creator and developer of the Talkyard platform that powers these comments. If you have your own SSG-based site and need a way to provide comments, I highly recommend both Talkyard and this extremely helpful dev.)</p>
</div>
`