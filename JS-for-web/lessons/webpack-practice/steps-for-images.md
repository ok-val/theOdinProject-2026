## Loading images

There are three ways I could deal with local images:

1. Image files declared in CSS using `url()`
`css-loader` takes care of this for us. Nothing to do here!

2. Image files referenced in the HTML template using `<img src="">`
2.1. I'd need an additional loader for this, called `html-loader`.
> npm install --save-dev html-loader

2.2. Config the `module.rules` array in the `webpack.config.js` to 
enable the loader. As this is a separate test, it must be included as
a new rule object (instead of being clumped with others).

3. Image files implemented using JS (such as for DOM manipulation)
3.1. No need to install any additional loader, just one new rule object 
for `asset/resource` rule. 
3.2. The images used must be *default imported* (not declared) using the 
correct path.

I should also expect that when images are output by Webpack into `dist`,
it will be hashed (I don't know how this works currently).


