const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const collections = require('metalsmith-collections')
const layouts = require('metalsmith-layouts')
const prism = require('metalsmith-prism')
const watcher = require('metalsmith-watch')
const ignore = require('metalsmith-ignore')
const md = require('marked')
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
const mirror = require('./lib/metalsmith-mirror-directories')
const sampler = require('./lib/metalsmith-sample')
const excerpts = require('./lib/metalsmith-excerpts')
const authorsConfig = require('./src/authors.json')

const noop = () => (f, m, d) => d()
const watch = process.argv[2] === 'watch' ? watcher : noop
const drafts = process.env.NODE_ENV !== 'development' ? drafter : noop
const sample = process.env.NODE_ENV === 'development' ? sampler : noop

metalsmith(__dirname)
  .use(drafts())
  .use(sample())
  .use(ignore(['**/.*', '**/_*']))
  .use(mirror('blog-assets'))
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
  .use(markdownFrontMatter('note'))
  .use(humanizeDate())
  .use(featured({
    collection: 'posts'
  }))
  .use(index())
  .use(layouts({ engine: 'pug', default: 'post.pug', pretty: true, md }))
  .use(json(['title', 'excerpt', 'shareimg', 'contents']))
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
