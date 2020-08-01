module.exports = function (data) {
  return `
<!DOCTYPE html>
<html lang="en" class="font-body dark:bg-black">
  ${this.headTag(data)}
  <body>
    ${this.siteHeader(data)}
      ${data.content}
    ${this.siteFooter(data)}
    <script src="/bundle.js"></script>
  </body>
</html>
`
}