# [The Fat Arrow Blog](http://fat-arrow.com/blog)

## Install
Clone this repository.
```
git clone git://github.com/FatArrowPH/blog.git
cd blog
```

Install dependencies.
```
npm install
```

Create the `blog` and `blog-assets` symlinks in your local fat-arrow.com repo.
```
make links
```


## Author profiles
Edit your profile and other data in the [authors.json file](src/authors.json).


## Writing
Start the watcher with `make watch` or just `make`. You can also initiate a build manually with `make build`. If you want to preview your rendered post as it would appear in production, make sure the fat-arrow.com development servers are also running and point your browser to the `/blog` route.

Write your posts in your designated directory in [src](src) (you can change this in the `dir` property in your [author profile](#author-profiles)). Use GitHub Flavored Markdown. Check out the [sample post](src/_sample-post.md) for examples. Place static assets (images and whatnot) in the shared [blog-assets](src/blog-assets) directory and link to them using root-relative paths (root being fat-arrow.com).

Markdown files in a `drafts` directory will only get built in development so you can safely commit and push unfinished posts.


## Publishing
Move your new post from `drafts` to your main directory if it's not already there. Commit your changes then push to `origin/master`. Note that only changes pushes to the master branch will be deployed.
