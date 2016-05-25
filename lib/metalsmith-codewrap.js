const cheerio = require('cheerio')

module.exports = function (wrapper) {
  wrapper = wrapper || '<div class="code-block">'
  return function (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (filename) {
      const file = files[filename]
      const $ = cheerio.load(file.contents.toString())
      const blocks = $('code[class^="language-"]').parent()
      if (!blocks.length) return
      blocks.each(function (i, block) {
        $(block).wrap(wrapper)
      })
      file.contents = new Buffer($.html())
    })
  }
}
