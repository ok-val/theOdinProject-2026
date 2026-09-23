# URL class / interface

Source:

- https://nodejs.org/api/url.html#url_the_whatwg_url_api
- https://developer.mozilla.org/en-US/docs/Web/API/URL

> The URL interface is used to parse, construct, normalize, and encode
> URLs. It provides properties which allow to read and modify components
> of a URL.

All props of the URL objects are implemented as getters and setters on
class prototype, rather than a data props on the object itself, meaning
that the any props of URL objects are protected against `delete` (e.g.,
`delete myURL.pathname` returns true but has no effect).

**Syntax**

> new URL(input,[,base])

- input <string> The absolute or relative URL to parse, if absolute =>
  ignore base
- base <string> The optional base URL to resolve against if the input is
  not absolute

```js
import { URL } from 'node:url';
```

```js
// constructing a new URL object
const myURL = new URL('/foo', 'https://example.org/');
// https://example.org/foo/

// Get and set the serialized URL
console.log(myURL.href); // .../foo

myURL.href = 'https://example.com/bar';
console.log(myURL.href); // .../bar
```

## Components

See URL components in './tutorial-scripts/url-class-usage.js'

## Characteristics

The URL constructor is accessible as a property on the global object.

```js
console.log(URL === globalThis.URL); // true
```
