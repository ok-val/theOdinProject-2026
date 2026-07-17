### Explanation

In this example, see how `index.js` loads an external library called
`lodash`: The `index.js` file depends on `lodash` being included in the 
page before it runs, while also creating an implicit var (_). 

The issue with managing JS projects this way:
* Not immediately clear about the dependency on external library
* Missing or mis-ordered dependency renders the app malfunctional
* Wholesale/unused dependency forces the browser to load unneeded codes

Webpack solves these issues by:
* Explicitly declares dependencies and bundles them together
* Thus, removes reliance on global vars and ensures scripts are run in 
the correct order


### Steps

1. Move `index.html` into dist, make sure it runs `main.js` (default 
name)

2. Switch from loading external libraries using HTML script to 
installing them via `npm` (in this case, `lodash`) and import vars in
the repsective scripts
> npm install lodash

3. Run `webpack` from the project root
> npx webpack