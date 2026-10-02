# exports object using CJS vs ESM

In Nodejs, every module file implicitly has an `exports` object
initialized under the hood, accessible as `module.exports`.

The syntax for import/export is different betwween CJS and ESM. As I am
more familiar with the ESM modern alternative, I want to map the
syntaxes for quick lookup.

| **syntax**     | **CommonJS**                  | **ES Modules**                    |
| -------------- | ----------------------------- | --------------------------------- |
| Named export   | `exports.myFunc = () => {};`  | `export const myFunc = () => {};` |
| Default export | `module.exports = myFunc;`    | `export default myFunc;`          |
| Named import   | `const {myFunc} = require();` | `import {myFunc} from './file;`   |
