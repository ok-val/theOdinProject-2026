# What is JSON?

JSON (JS Object Notation) is a standard text-based format for 
representing structured data based on JS object syntax. It's the common
standard for transmitting data in web apps. It can be used by other 
languages than JS itself.


## JSON Structure

JSON structure is perfectly valid JS object literal, with some more
syntax restrictions. That means if I put JSON in JS, I can just use 
the same dot/bracket notation to extract values from that object.

## JSON syntax restrictions

JSON can only contain a select group of primitives and non-primitives.

For the primitives, string literals, number literals, `true`, `false`, 
and `null` are allowed.

For non-primitives, object literals and arrays are allowed, but not
any other object types such as functions or classes, dates and sets. 

**Syntax rules:**
* Strings must be encolsed in double quotes, not single quotes.
* Nubmers must be written in decimal notation. 
* Every property of an object must be in the form of key: value pair.
Values cannot be methods since methods are functions are not allowed.
* Objects and arrays cannot contain trailing commas (i.e., the comma
placed after the final item in a list, array, or object).
* Comments are not allowed.

Any instance that fails to meet these rule can cause the JSON invalid. 
Use this online JSON formatter to ensure correct formatting:
https://jsonformatter.curiousconcept.com/

## Loading JSON locally

```js
import superHeroes from "./superHeroes.json" with { type: 'json' };
```

