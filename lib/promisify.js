module.exports = function (fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function cb (err, value) {
        if (err) reject(err)
        else resolve(value)
      }
      fn.apply(this, args.concat(cb))
    })
  }
}
