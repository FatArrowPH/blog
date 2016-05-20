const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const collections = require('metalsmith-collections')
const layouts = require('metalsmith-layouts')
const flatten = require('./lib/metalsmith-flatten')
const slug = require('./lib/metalsmith-slug')
const humanizeDate = require('./lib/metalsmith-humanize-date')
const drafts = require('./lib/metalsmith-drafts')
const authors = require('./lib/metalsmith-authors')
const markdownFrontMatter = require('./lib/metalsmith-markdown-front-matter')
const index = require('./lib/metalsmith-index')
const authorsConfig = require('./src/authors.json')

metalsmith(__dirname)
  .use(drafts())
  .use(authors(authorsConfig))
  .use(flatten())
  .use(collections({
    posts: {
      pattern: '*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(slug())
  .use(markdown())
  .use(markdownFrontMatter('note'))
  .use(humanizeDate())
  .use(index())
  .use(layouts({ engine: 'pug', default: 'post.pug', pretty: true }))
  .build(function (err) {
    if (err) console.log(err)
  })
