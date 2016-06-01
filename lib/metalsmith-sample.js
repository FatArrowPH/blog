module.exports = function (file = '_sample-post.md') {
  return function (files, metalsmith, done) {
    setImmediate(done)
    const newFilename = file.slice(1)
    if (!files[file]) return
    files[newFilename] = files[file]
    files[newFilename].author = {
      name: file.author || 'Fatbot',
      profile: '**Fatbot** is a lorem ipsum dolor sit amet in inquit videtur ferebat iugulum. Ego errat quod. Per et magnum, nec, dromas confertur, ait esse prohibent marisque. Radiorum quaedam et pleno. [Follow Fatbot on twitter](https://twitter.com).',
      img: '/img/instructor.png',
      slug: 'fatbot',
      posts: []
    }
    delete files[file]
  }
}
