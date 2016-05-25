const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const collections = require('metalsmith-collections')
const excerpts = require('metalsmith-excerpts')
const layouts = require('metalsmith-layouts')
const prism = require('metalsmith-prism')
const watcher = require('metalsmith-watch')
const flatten = require('./lib/metalsmith-flatten')
const slug = require('./lib/metalsmith-slug')
const humanizeDate = require('./lib/metalsmith-humanize-date')
const drafts = require('./lib/metalsmith-drafts')
const authors = require('./lib/metalsmith-authors')
const markdownFrontMatter = require('./lib/metalsmith-markdown-front-matter')
const index = require('./lib/metalsmith-index')
const featured = require('./lib/metalsmith-featured')
const codewrap = require('./lib/metalsmith-codewrap')
const authorsConfig = require('./src/authors.json')

const watch = process.argv[2] === 'watch' ? watcher : () => (f, m, d) => d()

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
  .use(markdown({
    langPrefix: 'language-'
  }))
  .use(prism())
  .use(codewrap('<div class="code-block-container">'))
  .use(excerpts())
  .use(markdownFrontMatter('note', 'excerpt'))
  .use(humanizeDate())
  .use(featured({
    collection: 'posts'
  }))
  .use(index())
  .use(layouts({ engine: 'pug', default: 'post.pug', pretty: true }))
  .use(watch({
    paths: {
      '${source}/**/*': true,
      'layouts/*': '**/*'
    }
  }))
  .build(function (err, files) {
    if (err) return console.log(err)
    console.log('Built:')
    console.log(' ', Object.keys(files).join('\n  '))
  })
