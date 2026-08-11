## Linting

There are style guides in the JS world that are really helpful, but 
since there are a lot of them, it can be difficult to internal them all.

Introducing **Linters**, tools that will scan your code with a set of 
style rules and will report any errors to you that they find.

For some linters, they can also auto-fix the errors. 
The most common one is *ESLint*.

1. Install ESLint with npm
> npm init @eslint/config@latest
Answer a few questions based on your project

See how to get started here:
https://eslint.org/docs/latest/use/getting-started

See how to config here:
https://eslint.org/docs/latest/use/configure/

3. Run ESLint
> npx eslint .



## Formatters

These serve slightly different function than linters. 
They do not look for style errors, just the layout of the code,
like the spacing, indentations, and line breaks.

**Prettier** is a popular choice and it's highly opinionated and most 
of its formatting decisions are customizable. 
But since these decisions have been made, it just reduces the time spent
on formatting, which is another black hole.

1. Install Prettier using npm 
> npm install -D --save-exact prettier@[check latest version]

Latest version can be found here: 
https://prettier.io/docs/install.html

2. Create an empty config file to let editors and other tools know I am
using Prettier:

> node --eval "fs.writeFileSync('.prettierrc','{}\n')"
or 
> touch .prettierrc && echo "{}/n" >> .prettierrc

3. Create a `.prettierignore` file to let the Prettier CLI and editors 
know which files to NOT format:

> node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
or 
> touch .prettierignore && echo "# Ignore artifacts:\nbuild\ncoverage\n" >> .prettierignore

4. Run Prettier
> npx prettier . --write

Config Prettier guide: 
https://prettier.io/docs/configuration



## For Prettier ESLint VSCode extension
Use the following npm install:
> npm i -D prettier@latest eslint@latest prettier-eslint@latest

