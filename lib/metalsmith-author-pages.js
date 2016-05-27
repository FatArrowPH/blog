module.exports = function () {
  return function (files, metalsmith, done) {
    setImmediate(done)
    const meta = metalsmith.metadata()
    Object.keys(meta.authors).forEach(function (name) {
      const author = meta.authors[name]
      files[`${author.slug}.html`] = {
        contents: '',
        title: name,
        author: name,
        posts: author.posts,
        layout: 'author.pug'
      }
    })
  }
}
