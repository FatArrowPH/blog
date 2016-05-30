const clone = require('lodash.clonedeep')

module.exports = function (authors) {
  authors = clone(authors).map(function (author) {
    author.posts = []
    return author
  })

  function getAuthorBy (key, value) {
    return authors.find(a => a[key] === value)
  }

  return function (files, metalsmith, done) {
    setImmediate(done)
    delete files['authors.json']
    const meta = metalsmith.metadata()
    meta.authors = authors
    Object.keys(files).forEach(function (filename) {
      const file = files[filename]

      let author = getAuthorBy('dir', filename.split('/')[0])
      if (!author && file.author) {
        author = getAuthorBy('name', file.author)
      }

      file.author = author
      author.posts.push(file)
    })
  }
}
