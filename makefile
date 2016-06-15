watch:
	@export NODE_ENV=development; \
	node index.js watch

build:
	@export NODE_ENV=development; \
	node index.js

build-prod:
	@node index.js

.PHONY: watch build build-prod
