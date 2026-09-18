# Run Node script from the CLI

Source:

- https://nodejs.org/learn/command-line/run-nodejs-scripts-from-the-command-line

Make sure to use a relative path from the root folder.

> node backend/nodejs/tutorial-scripts/first-node-script.js

## Use a chmod + shebang (Linux ecosystem)

> A shebang line should always be the first line in the file which tells
> the OS which interpreter to use to running the script. In this case,
> the interpreter is specified as `node`.

```js
#!/usr/bin/env node
// #!/usr/bin/node
// Because not all OS have node in the bin folder

// followed by the rest of the code
```

With chmod adding executable right for the current user (me) I could run
this file directly from the terminal using `./shebang-line.js` without
having to call `node` each time.

> ./shebang-line.js

## Pass string as arg to `node` instead of file path

> node -e "console.log('This was evaluated directly from the CLI')"

> node --eval='console.log(123)'

## Run a task with Node vs npm

`package.json` has been changed to contain some custom scripts that use
Node to execute certain files. Go check them out!

Running with npm:

> npm run test-with-npm

> backend@1.0.0 test-with-npm node
> ./nodejs/tutorial-scripts/run-test-with-node.js

> Run this test with node

Running with node:

> node --run test

> Run this test with node
