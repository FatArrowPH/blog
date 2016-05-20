const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const layouts = require('metalsmith-layouts')
const flatten = require('./lib/metalsmith-flatten')
const slug = require('./lib/metalsmith-slug')

metalsmith(__dirname)
  .use(flatten())
  .use(slug())
  .use(markdown())
  .use(layouts({ engine: 'pug', default: 'post.pug', pretty: true }))
  .build(function (err) {
    if (err) console.log(err)
  })
