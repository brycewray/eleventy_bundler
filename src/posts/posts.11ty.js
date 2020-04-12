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

  return `
  <main>
	<div class="container">
		<h1 class="ctr topOfMain">Posts</h1>
		<div class="post-line"></div>
    <div class="container-narrower">
      ${
        data.pagination.items.map(post =>
        `
        <div>          
          <h2 class="h5" style="margin-bottom: 0.25em;"><a href="${post.url}">${post.data.title}</a><br />
          <span class="legal"><em>${post.data.subtitle}</em></span></h2>
          <p class="pokey text-muted" style="margin-top: 0;">
            <time style="display: inline;" datetime="${(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}">${(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</time>
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
		</div>
	</div>

</main>  
  `
}
