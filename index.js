const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const flatten = require('./lib/metalsmith-flatten')

metalsmith(__dirname)
  .use(flatten())
  .use(markdown())
  .build(function (err) {
    if (err) console.log(err)
  })
