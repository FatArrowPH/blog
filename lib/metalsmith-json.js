const { basename, extname } = require('path')

module.exports = function () {
  return function (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (filename) {
      const file = files[filename]
      const contents = JSON.stringify({
        title: file.title,
        content: file.contents.toString()
      })
      const name = `${basename(filename, extname(filename))}.json`
      files[name] = { contents }
      delete files[filename]
    })
  }
}
