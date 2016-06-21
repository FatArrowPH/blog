const { basename, extname } = require('path')

module.exports = function (props) {
  props = props.includes('contents') ? props : props.concat('contents')
  return function (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (filename) {
      const file = files[filename]
      const contents = JSON.stringify(props.reduce(function (o, prop) {
        o[prop] = prop !== 'contents' ? file[prop] : file[prop].toString()
        return o
      }, {}))
      const name = `${basename(filename, extname(filename))}.json`
      files[name] = { contents }
      delete files[filename]
    })
  }
}
