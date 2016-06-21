const cheerio = require('cheerio')
const md = require('marked')

module.exports = function () {
  return function (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (filename) {
      const file = files[filename]
      let text, html

      if (file.excerpt) {
        html = md(file.excerpt)
        text = cheerio.load(html).root().text()
      } else {
        let $ = cheerio.load(file.contents.toString())
        let p = $('p').eq(0)
        if (p.length) {
          text = p.text()
          html = $.html(p)
        }
      }

      file.excerpt = { text, html }
    })
  }
}
