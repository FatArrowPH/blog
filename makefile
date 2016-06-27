watch:
	@export NODE_ENV=development; \
	node index.js watch

build:
	@export NODE_ENV=development; \
	node index.js

build-prod:
	@node index.js

links:
	@echo Input the full path to your fat-arrow.com repo:
	@read site; \
	ln --symbolic --interactive --no-target-directory $$PWD/build $$site/content/blog; \
	ln --symbolic --interactive $$PWD/build/blog-assets $$site/public/

.PHONY: watch build build-prod link
