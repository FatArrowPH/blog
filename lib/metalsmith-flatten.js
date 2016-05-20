const { basename, dirname } = require('path')

module.exports = function () {
  return function (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (filename) {
      if (dirname(filename) === '.') return
      files[basename(filename)] = files[filename]
      delete files[filename]
    })
  }
}
