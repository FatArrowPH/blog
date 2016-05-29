const { sep } = require('path')
const promisify = require('./promisify')
const mkdirp = promisify(require('mkdirp'))
const cp = promisify(require('ncp').ncp)

function mirror ({ src, dest }) {
  return mkdirp(dest).then(_ => cp(src, dest))
}

module.exports = function (dirs) {
  dirs = [].concat(dirs)
  return function (files, m, done) {
    Object.keys(files).forEach(function (filename) {
      if (dirs.indexOf(filename.split(sep)[0]) !== -1) delete files[filename]
    })

    const mirrored = dirs.map(d => mirror({
      src: m.path(m.source(), d),
      dest: m.path(m.destination(), d)
    }))

    Promise.all(mirrored)
      .then(_ => done())
      .catch(err => done(err))
  }
}
