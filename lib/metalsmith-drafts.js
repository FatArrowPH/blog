const { sep } = require('path')

module.exports = function (draftDir = 'drafts') {
  return function (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (filename) {
      const data = files[filename]
      if (data.draft || filename.split(sep).indexOf(draftDir) !== -1) delete files[filename]
    })
  }
}
