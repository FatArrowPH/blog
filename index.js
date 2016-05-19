const metalsmith = require('metalsmith')

metalsmith(__dirname)
  .build(function (err) {
    if (err) console.log(err)
  })
