const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const collections = require('metalsmith-collections')
const excerpts = require('metalsmith-excerpts')
const layouts = require('metalsmith-layouts')
const prism = require('metalsmith-prism')
const watcher = require('metalsmith-watch')
const ignore = require('metalsmith-ignore')
const flatten = require('./lib/metalsmith-flatten')
const slug = require('./lib/metalsmith-slug')
const humanizeDate = require('./lib/metalsmith-humanize-date')
const drafter = require('./lib/metalsmith-drafts')
const authors = require('./lib/metalsmith-authors')
const authorPages = require('./lib/metalsmith-author-pages')
const markdownFrontMatter = require('./lib/metalsmith-markdown-front-matter')
const index = require('./lib/metalsmith-index')
const featured = require('./lib/metalsmith-featured')
const codewrap = require('./lib/metalsmith-codewrap')
const json = require('./lib/metalsmith-json')
const authorsConfig = require('./src/authors.json')

const noop = () => (f, m, d) => d()
const watch = process.argv[2] === 'watch' ? watcher : noop
const drafts = process.env.NODE_ENV !== 'development' ? drafter : noop

metalsmith(__dirname)
  .use(drafts())
  .use(ignore(['**/.*', '**/_*']))
  .use(authors(authorsConfig))
  .use(authorPages())
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
  .use(json())
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
