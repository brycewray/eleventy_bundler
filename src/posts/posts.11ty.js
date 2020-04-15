exports.data = {
  layout: 'layouts/_default/base.11ty.js',
  tags: ['nav'],
  navtitle: 'Posts',
  title: 'Posts',
  pagination: { 
    data: 'collections.post',
    size: 5,
    reverse: true,
    alias: 'posts'
  }
}

exports.render = function (data) {
  const pagerThing = `
  <p class="ctr pokey" style="margin-top: 0.5em; margin-bottom: 0.5em;">
    ${
      data.pagination.href.previous === null 
        ? `<span class="text-muted">&lt;&lt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>`
        : `<a href="${data.pagination.href.first}">&lt;&lt;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${data.pagination.href.previous}">&lt;</a>`      
    }
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ${
      data.pagination.href.next === null
        ? `<span class="text-muted">&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt;</span>`
        : `<a href="${data.pagination.href.next}">&gt;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${data.pagination.href.last}">&gt;&gt;</a>` 
    }
  </p>
`
  return `
  <main>
	<div class="container">
		<h1 class="ctr topOfMain">Posts</h1>
    <div class="post-line"></div>
    <div class="container-narrower">
      ${pagerThing}
      <hr style="margin-top: 0.5em; margin-bottom: 1.5em;" />
      ${
        data.pagination.items.map(post =>
        `
        <div>          
          <h2 class="h5" style="margin-bottom: 0.25em;"><a href="${post.url}">${post.data.title}</a><br />
          <span class="legal"><em>${post.data.subtitle}</em></span></h2>
          <p class="pokey text-muted" style="margin-top: 0;">
            Published: <time style="display: inline;" datetime="${(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}">${(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</time>
            ${
              post.data.lastmod
              ? `<br />Last modified: <time style="display: inline;" datetime="${(post.data.lastmod.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}))}">${(post.data.lastmod.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}))}</time>`
              : ``
            }
          </p>
          <p class="pokey text-body" style="margin-top: 0.5em; margin-bottom: 2em;">
            ${post.data.description}
          </p>
        </div>
        `
        ).join('')
      }
      <hr style="margin-top: 1.5em;" />
      ${pagerThing}
		</div>
	</div>

</main>  
  `
}
