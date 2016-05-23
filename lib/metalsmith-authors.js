const clone = require('lodash.clonedeep')

module.exports = function (authors) {
  authors = clone(authors).reduce(function (o, author) {
    author.posts = []
    o[author.name] = author
    return o
  }, {})

  const getAuthor = (function (authors) {
    const authorByDir = Object.keys(authors).reduce(function (map, author) {
      author = authors[author]
      map[author.dir] = author
      return map
    }, {})

    return function (dir) {
      return authorByDir[dir]
    }
  }(authors))

  return function (files, metalsmith, done) {
    setImmediate(done)
    delete files['authors.json']
    const meta = metalsmith.metadata()
    meta.authors = authors
    Object.keys(files).forEach(function (filename) {
      const file = files[filename]
      const author = getAuthor(filename.split('/')[0])
      file.author = author
      meta.authors[author.name].posts.push(file)
    })
  }
}
