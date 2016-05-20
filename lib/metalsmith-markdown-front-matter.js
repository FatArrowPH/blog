const md = require('marked')

module.exports = function (...keys) {
  return function (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (filename) {
      const file = files[filename]
      keys.forEach(function (key) {
        if (!file[key]) return
        file[key] = md(file[key])
      })
    })
  }
}
