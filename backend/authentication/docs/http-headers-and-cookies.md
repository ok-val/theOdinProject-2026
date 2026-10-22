# HTTP Headers and Cookies

Source:

- https://www.youtube.com/watch?v=z7872Nki5FY&list=PLYQSCk-qyTW2ewJ05f_GKHtTIzjynDgjK&index=1

When a web service like Google loads, the page comes with an HTTP
header. When inspected in DevTools, `www.google.com` comes with header
that has three main parts:

1. General headers
2. Response headers
3. Request headers

[MDN HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers)
has some fantastic resource on what different header means.

When a Client makes a GET request, it attaches some headers onto the
`req.headers` such as the URL, method, or acceptable file types, all of
which could be found programmatically inside the `http.incomingRequest`
object (which could be parsed by Express' req object).

Then, when the server responses, it attaches some headers onto the
`res.headers` such as the status code, content type, or server info, all
of which could be found programmatically inside the
`http.serverResponse` object (parsable by Express' res object).

## Cookie lifecycle

Upon an initial req, Server processes the credentials and decides to
remember the session. The initial response comes back to Client with an
initial set of Cookies, set in the `res` headers by Server.

On the client, they are stored locally, inspectable in DevTools ->
Application -> Storage -> Cookies (There are many types of cookies
here).

Upon subsequent req, these stored cookies are then attached onto the
`req` headers from the Client.

## What does the cookie do?

The user has their personal info stored on their Client machine.

The server has the user's info stored in DB.

Because HTTP is a _stateless_ protocol, meaning that the protocol cannot
have states within themselves, the cookie helps connect the communicate
the two on every request (and it's possible to maintain auth sessions
even when the browser closes using persistent cookie).

It's basically saying: "Here's the user info that was used to send this
req. It's based on what the user has provided so far and we can use that
to allow them to certain things."

Cookie is what makes persistent log-in possible. Without it, Client
would have to login on every req.

## What can the cookie store?

Besides from the `connect.sid` cookie, there are also other types of
cookies, such as cookies for ads (set by Third-Party cookies, used to
track user activities across different websites).

## Setting custom document.cookies

Yes, I can set my own custom cookie via JS:

```js
// All cookies are defined as key-value pairs inside a string separated by ;
// Each key acts as the cookie's property, each with their own function
document.cookie = 'name=value;' + 'expiry=value;';
// prints the cookie on return
```
