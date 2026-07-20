1. Create a subfolder for the webpack package: 
> mkdir webpack-practice

2. Enter the new subfolder using cd
> cd ./webpack-practice

3. Create a default `package.json` here:
> npm init -y --init-type=module

Note that the default type for `package.json` is `commonjs`.

4. Install Webpack and Webpack CLI here:
> npm install webpack webpack-cli --save-dev 

Remember (from "../npm/intro-to-using-npm.md"), npm install does two 
things:
1) Download package(s) into `node_modules` folder, 
2) Update the `package.json` file to track the package as dependency
(a devDepdncy in this case).

Flag shortcut: 
* --save-dev: -D

5. Create a new `src` folder and two new files in there:
> mkdir src
> touch src/index.js src/greeting.js

6. Add code to `index.js` and `greeting.js`, creating a dependency chain

7. Config output option via the `webpack.config.js` file

8. Run Webpack from the root dir (webpack-practice)
> npx webpack


### Handling HTML
There's a plugin to bundle HTML! That's `HtmlWebpackPlugin`.
9. To install this tool:
> npm install --save-dev html-webpack-plugin

10. Create a new HTML file in the `src` folder with boilerplates.
> touch src/template.html

10. Config the `webpack.config.js` file to include the new package.

11. Run Webpack again to see that `main.js` has integrated in 
`index.html`.


### Handling CSS
To bundle CSS, we need two plugins. 
12. Welcome `StyleLoader` and `CssLoader`!
> npm install --save-dev style-loader css-loader

These plugins do the following:
* `css-loader` reads any CSS files we import in a JS file and store the
result in a string. 
* Then, `style-loader` takes that string and adds the JS code that will 
apply those styles to the page. 

Note that a chain is executed in the reverse order (right to left)

13. Create a new CSS file in `src`
> touch src/style.css

14. Reconfig the `webpack.config.js` to include the loaders
Note that the loader order is important, so make sure these loaders are
declared in the respective order.

15. Once again, run Webpack:
> npx webpack

16. For images implemented thru JS, CSS, or HTML, see 
"./steps-for-images.md" for detailed instructions


### Webpack Dev Server 

17. Finally, to improve our quality of life, I can use the 
`webpack-dev-server` to automate rebundling for real-time changes.
To install it: 
> npm install --save-dev webpack-dev-server

Along with the following changes in the `webpack.config.js` file:
* The `devtool`, `eval-source-map`, matches up the correct files and 
line numbers in the browser devtool, making debugger easier for us.
* Add the `html template` to the `devServer watchFiles` to include our
working html in `webpack-dev-server` auto-restart protocol.

18. Lastly, run the *dev server*:
> npx webpack serve
