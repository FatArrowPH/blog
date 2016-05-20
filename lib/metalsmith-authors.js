module.exports = function (authors) {
  const getAuthor = (function (authors) {
    const authorByDir = authors.reduce(function (map, author) {
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
    Object.keys(files).forEach(function (filename) {
      const file = files[filename]
      const author = getAuthor(filename.split('/')[0])
      file.author = author
    })
  }
}
