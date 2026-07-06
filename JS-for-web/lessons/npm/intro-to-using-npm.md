### Using npm

Source: https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html

Package managers emerged from the need for downloading and upgrading JS 
libraries from a central repo. Before npm, there were quite a few package 
managers such as Bower, yarn. 

npm was not designed specifically for frontend development, but for `node.js`
which is a JS runtime designed to run on the server. This makes it strange for
a frontend dev to know how to use npm. Further, npm involves using CLI, which in
the past was never a thing for frontend devs.

The most basic way to use npm is to create a `package.json` file using CLI
questionnaire (covered in "./creating-a-package-json.md") in which I'll have to
answer some questions (which can be customized using a file called 
`.npm-init.js`).

Every package is going to include some different flags for installation. For 
example, see the installation CLI for *moment.js*:

```terminal
npm install moment --save
```

This command does two things: 

1. Download the code from *moment.js* into a folder called `node_modules`
2. Modify the `package.json` file to keep track of *moment.js* as dependency

Additionally, if `package.json` doesn't exist when a package is installed (i.e.,
as a result of not running `npm init`), the latest package of the package will 
be installed (dicussed in "./installing-different-package-types.md").

The `package.json` file acts as an instruction sheet for npm. Instead of sharing
the entire `node_modules` folder (into which packages are downloaded),
`package.json` allows other devs to install the requried packages automatically
with `npm install`. This thus addressess the laborious downloading and updating
packages.

When the package is downloaded onto our root dir, we still have to implement the
correct script tag pointing to correct directory in the `node_modules` folder.
For example:

```html
<script src="node_modules/moment/min/moment.min.js"></script>
<script src="index.js"></script> 
```

**The problem is that all modules share vars globally.**


### Using JS module bundler

CommonJS (implemented in node.js) emerged as a solution to this inconvenience of
global vars. With it, instead of loading all of `moment.min.js` in the my 
`index.html` with a script tag, I can load it directly my `index.js` file 
as follows:

```js
var moment = require('moment');
// moment.min.js package functional 
```

Now all I need to load into my `index.html` is the centralized `index.js`,
and I did not need to specify the dir path to moment, *node.js* knows the 
location of each npm module path, so this is taken care of.

**The remaining problem is that node.js functionalities (e.g., require())**
**cannot be run in the DOM.**

This is where a module bundler comes in. It gets around this problem by
performing a build step that find all the `require` statements (invalid for DOM
JS) and replace them with actual contents of each required file. The module
bundler thus convert browser-incompatible node.js input into compatible output.


#### Webpack module bundler

*Webpack* became popular around 2015, partly thanks to its compatiblility with
React framework, which took full advantages of *webpack*'s features. 

Webpack itself is an npm package which again is installed via npm CLI:

```terminal
npm install webpack webpack-cli --save-dev
```

Note that the `--save-dev` flag allows both webpack and webpack CLI to be saved
as development dependencies (covered in "./devDependencies-vs-dependencies.md").
<!-- At this point, it becomes clearer that production and developement
dependencies may be run in separate runtimes. -->

Now, with webpack CLI installed in `node_modules`, I can begin with bundling
our `require` statements in my `index.js` file as follows:

```terminal
./node_modules/.bin/webpack index.js --mode=development
```

This process results in a bundled output (which by default is stored in 
"./dist/main.js"). Depending on the mode argument, webpack will keep the JS 
more readable for developers (--mode=development) or more minified for 
production (--mode=production).

To further customize webpack default settings, see the config file in root dir 
`webpack.config.js`, which in my case would look something like:

```js
// webpack.config.js  
module.exports = {  
    mode: 'development',  
    entry: './index.js',  
    output: {  
        filename: 'main.js',  
        publicPath: 'dist'  
  }  
};
```


### Using the bundled JS

Now that I have the webpack's `dist/main.js` output, I should use that instead 
of my proto-bundled `index.js`.

The remaining issue is that I would need to run the webpack command each time
I change index.js (as this is where bash scripting may come in handy). 
Nonetheless, the recursive command does not call the file name or mode as these
options have been saved in the `webpack.config.js` file:

```terminal
./node_modules/.bin/webpack
```


To sum, npm, originally designed for node.js which is a backend runtime, emerged
for frontend dev from the need to download and update packages automatically and
to better share projects with other devs. 

Still, dev needed to include multiple scripts in a single HTML file, CommonJS 
(now native in node.js) was developed to allow scripts to require codes from 
packages without exposing everything in the main HTML. 

However, these backend functionalities cannot be run in the DOM, module bundlers
thus were born to convert them into a single browser compatible JS file, which 
would be used in the main HTML file.


npm: the manager
module bundlers: the facilitator

=> In other words, module bundlers allow packages to work with our scripts 
without the need to expose and expand required codes in the main HTML. 
