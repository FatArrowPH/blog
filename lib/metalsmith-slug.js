const { basename, extname } = require('path')

function slugify (str) {
  return str
    .toLowerCase()
    .replace(/[^(a-z)|(\d)|(\s)|(\-)|(_)]/g, '')
    .replace(/\s/g, '-')
}

module.exports = function (key = 'slug') {
  return function (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (filename) {
      const file = files[filename]

      const ext = extname(filename)
      let slug
      if (file[key]) slug = file[key]
      else if (file.title) slug = slugify(file.title)
      else slug = slugify(basename(filename, ext))

      const slugged = `${slug}${ext}`
      file.slug = slug
      files[slugged] = file
      if (slugged !== filename) delete files[filename]
    })
  }
}
