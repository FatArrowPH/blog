module.exports = function () {
  return function (files, metalsmith, done) {
    setImmediate(done)
    files['index.html'] = {
      contents: '',
      layout: 'index.pug'
    }
  }
}
