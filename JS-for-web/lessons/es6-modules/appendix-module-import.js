// example modules demonstrated in what-modules-do.js

// Imported variables from appendix-module-one.js
// To do named imports, I specify the names of the things I want to import inside { }
// Note that file path can only use single- or double-quote notation,
// template string (backtick notation) is not allowed.
// Also note that this syntax is not concomittant with object destructuring
// meaning that we are not importing an object with two properties here.

// Here's how named exports are imported:
import { greeting, farewell } from "./appendix-module-named";

console.log(greeting);
console.log(farewell);

// anything that's part of the export but not imported, won't be available here.

// And here's how default exports are imported:
// remember that default exports can only export SINGLE thing at a time
// Note that I don't need { curlies } to import/export default exports

// default imports allow themselves to be named h/e we want to
import helloHalla from "./appendix-module-default";
console.log(helloHalla);


