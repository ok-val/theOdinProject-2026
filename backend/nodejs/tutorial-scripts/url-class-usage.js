import { URL } from 'node:url';

console.log(URL === globalThis.URL);

const myURL = new URL('/foo#bar', 'https://example.org/');

console.log(myURL);

myURL.href =
  'https://user:password@subdomain.example.com:8080/path/to/resource?query=search&sort=asc#section2';

// All of these following methods are getters and setters
// They also correspond with the components of the URL
console.log(myURL.href);

console.log(myURL.origin);
console.log(myURL.protocol);
console.log(myURL.username);
console.log(myURL.password);

console.log(myURL.hostname);
console.log(myURL.host);
console.log(myURL.port);

console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.searchParams);
console.log(myURL.hash);
