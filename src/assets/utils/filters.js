// From https://sia.codes/posts/webmentions-eleventy-in-depth/

// const { DateTime } = require("luxon"); // Already in eleventy-base-blog

module.exports = {
  /*
  getWebmentionsForUrl: (webmentions, url) => {
    return webmentions.children.filter(entry => entry['wm-target'] === url)
  },
  size: (mentions) => {
    return !mentions ? 0 : mentions.length
  },
  */
  webmentionsByType: (mentions, mentionType) => {
    return mentions.filter(entry => !!entry[mentionType])
  },
  /*
  readableDateFromISO: (dateStr, formatStr = "dd LLL yyyy 'at' hh:mma") => {
    return DateTime.fromISO(dateStr).toFormat(formatStr)
  }
  */
}