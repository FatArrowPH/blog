module.exports = function () {
  return function (files, metalsmith, done) {
    setImmediate(done)
    const meta = metalsmith.metadata()
    meta.authors.forEach(function (author) {
      const name = author.name
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
