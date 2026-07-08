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
