const defaultKeys = {
  yaml: 'featured',
  meta: 'featured',
  collection: 'posts'
}

module.exports = function (config) {
  const keys = Object.assign({}, defaultKeys, config)
  return function (files, metalsmith, done) {
    setImmediate(done)
    const meta = metalsmith.metadata()
    // Default to first post in the collection
    meta[keys.meta] = meta[keys.collection][0]
    Object.keys(files).forEach(function (filename) {
      const file = files[filename]
      if (file[keys.yaml]) meta[keys.meta] = file
    })
  }
}
