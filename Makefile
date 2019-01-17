install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

publish:
	npm publish

build: lint
	rm -rf dist
	npm run build

lint:
	npx eslint .

home:
	dist/bin/brain-games.js

calc:
	dist/bin/brain-calc.js

even:
	dist/bin/brain-even.js

gcd:
	dist/bin/brain-gcd.js
