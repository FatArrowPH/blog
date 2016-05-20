const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')

metalsmith(__dirname)
  .use(markdown())
  .build(function (err) {
    if (err) console.log(err)
  })
