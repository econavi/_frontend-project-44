install:
	npm install

start:
	npx babel-node -- bin/brain-games.js

publish:
	npm publish

build: lint
	rm -rf dist
	npm run build

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js

calc:
	node bin/brain-calc.js

even:
	node bin/brain-even.js

gcd:
	node bin/brain-gcd.js

progression:
	node bin/brain-progression.js

prime:
	node bin/brain-prime.js
