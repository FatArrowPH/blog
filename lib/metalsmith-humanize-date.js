const moment = require('moment')

const defaultConfig = {
  keys: ['date'],
  format: 'MMMM D, YYYY'
}

function ucFirst (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = function (config) {
  const opts = Object.assign({}, defaultConfig, config)
  return function (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (filename) {
      const file = files[filename]
      opts.keys.forEach(function (key) {
        if (!file[key]) return
        file[`human${ucFirst(key)}`] = moment(file[key]).format(opts.format)
      })
    })
  }
}
