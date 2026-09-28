# Environment Variables

Source:

- https://nodejs.org/docs/latest-v24.x/api/environment_variables.html
- https://www.theodinproject.com/lessons/nodejs-environment-variables

Environment Variables are dynamic variables availble to all files in a
specifc environment. Every machine provides different environment(s) for
its runtime, engine with different configs, for different needs.

Programs can run in different environments, which can provide different
endpoints, APIs, directories, paths.

For example, a source code can have different environment configs for
whether it's running in "dev" or "prod" mode. Or, a source code could
point to different database endpoints in different regions.

## Ways of loading env vars

1. Via terminal, prepend the env vars to the `node <fileToRun>` command:

> API_KEY=hooplas node ./tutorial-script/load-env-vars.js

Access this env var inside a .js file via the `process.env` object

2. Export the env vars to the Shell:

> export API_KEY=hooplas

If the var name already exists, overwrite it.

And to remove the env var:

> unset API_KEY=hooplas

The `export` and `unset` commands only injects the env vars into the
current instance of the Shell, meaning that said vars are only available
locally to that Shell such that a different Shell (e.g., when restarting
a Terminal) would not have access to those vars.

So if I mess up injecting the Shell, just restart a new session.

3. Create node env file(s)

   Node v24.10 has built-in stable support for `.env` files. Remember to
   ignore all `.env` in `.gitignore`.

   1. Load programmatically

   ```js
   // for specific path with custom name
   process.loadEnvFile('<path>');
   // root with anonymous .env
   process.loadEnvFile();
   ```

## Inspect env vars via Terminal

> printenv
