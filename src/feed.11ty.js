const createRssFeed = require('eleventy-rss-helper')
const permalink = '/feed.xml'
 
module.exports = createRssFeed({
  permalink,
  feedOptions(data) {
    var baseUrl = data.siteparams.siteURLforOG
    return {
      title: `${data.siteparams.siteTitle}`,
      description: `${data.siteparams.siteDescription}`,
      feed_url: `${baseUrl}${permalink}`,
      site_url: baseUrl
    }
  },
  items(collections, data) {
    return data.collections.posts
      .reverse()
  },
  itemOptions(item, data) {
    var baseUrl = data.siteparams.siteURLforOG
    return {
      title: `${item.data.title}`,
      description: `${item.data.description}`,
      url: `${baseUrl}${item.url}`,
      date: `${item.date}`
    }
  }
})