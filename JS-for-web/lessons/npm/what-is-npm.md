# npm

## What are they?

npm (no caps!) is a package manager of a large repo for plugins, libraries, and
other tools. 
These tools would include CMD-line tool we can use to install the packages.
After installing them, we have all the installed packages' code locally, 
which we can import into our files. 
One could even publish their own code to npm!

Interestingly, *npm* doesn't stand for Node Package Manager---a common myth!

As development gets more involved, more and more files and dependencies are 
needed. This can get even more troublesome for the client browser ending up
having to download too many JS scripts... This is where **bundles** come in.
Bundle is another type of tool that allow writing multiple files that are easier
to work with, then bundle them together into fewer smaller files which for 
client browser to receive.


## package.json

npm by default resolves around a file called `package.json`. 
JSON, or JS Object Notation, is a type of file that is used to sotre and 
transport data across the web. Its syntax is derived from JS object literal 
notation, which I've learned. It's basically the syntax you use to create in JS
using key-value pairs enclosed in { curlies }.

Anyhow, the `package.json` file would contain any dependencies including their
version numbers. Here's how a package.json would look like (all key-value pairs
use string literals):

```json
{
  "name": "curriculum",
  "version": "1.0.0",
  "description": "[The Odin Project](https://www.theodinproject.com/)",
  "scripts": {
    "lint": "markdownlint-cli2",
    "fix": "markdownlint-cli2 --fix"
  },
  "license": "CC BY-NC-SA 4.0",
  "devDependencies": {
    "markdownlint-cli2": "^0.12.1"
  }
}
```

With this proper json file and a repo cloned to my machine, I wouldn't have to
install each of these dependencies by me self. npm would grab the code for me.

npm would also automatically update the `package.json` with new deets as we work
on the project.

