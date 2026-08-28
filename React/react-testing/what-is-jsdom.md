# jsdom package

Source: https://medium.com/@lakpahana/what-is-jsdom-a63872015116

`jsdom` is a pure-JS implementation of standard web tech, designed to
use with Node.js to allow devs to emulate a browser environment without
an actual browser.

It is the essential tool for web scraping or headless UI testing.

Jsdom parses HTML and provides a virtual DOM that we can interact with
programmatically.

```js
const jsdom = require('jsdom'); // commonjs syntax
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector('p').textContent); // "Hello world"
```

In this environment, script execution is disabled by default for
security reasons which can be enabled with the `runScripts` option.
