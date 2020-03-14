/* based on https://github.com/maxboeck/eleventy-webmentions/blob/master/_includes/webmentionlist.njk */

module.exports = function (eleventyConfig) {

  eleventyConfig.addShortcode('webMList', function(data) {
    return `

    {%- set absoluteUrl -%}{{ page.url | url | absoluteUrl(metadata.url) }}{%- endset -%}
    {%- set mentions = webmentions.children | webmentionsForUrl(absoluteUrl) -%}
    <div class="webmentions" id="webmentions">
      <h3>Webmentions</h3>
      {% if mentions | length %}
        <div class="webmentions__facepile">
          {% for webmention in mentions | reverse | head(5) %}
            <img src="{% if webmention.author.photo %}{{ webmention.author.photo }}{% else %}{{ '/images/webmention-avatar-default.svg' | url }}{% endif %}" title="{{ webmention.author.name }}" alt="" class="webmentions__face" />
          {% endfor %}
          {% if mentions.length > 5 %}
            <span>+{{ mentions.length - 5 }}</span>
          {% endif %}
        </div>
    
        <ol class="webmentions__list">
          {% for webmention in mentions | reverse %}
            <li class="webmentions__item">
              {% include 'webmention.njk' %}
            </li>
          {% endfor %}
        </ol>
    
      {% else %}
        <p class="ctr">(No mentions yet.)</p>
      {% endif %}
    </div>    
    `
  })

}
