# Cookies vs Sessions

Cookies and Sessions work together.

Because HTTP is a _stateless_ protocol, meaning that the server forgets
who you are on after every req, Cookies and Sessions work together to
figure out how to store and attach information on who you are.

## Cookies

> Cookies is a small piece of data (a key-value pair) that the server
> tells the browser to store so that it could figure out your
> credentials later.

It lives on the Client-side. Once set, Client attaches the cookies to
the Cookie header of every single subsequent HTTP req sent back to that
domain (or until the cookie expires, if set).

Because cookies travel across the Internet, it can be inspected by
anyone. So sensitive information such as raw password or account balance
should NEVER be stored as cookies.

## Session

> Session is a mechanism, running as part of a Strategy (often by
> Passport), used to store a user's authenticated state and private data
> (e.g., user ID, cart contents).

It lives on the Server-side. Using the Local strat, Server creates and
attaches a unique **Session ID** under that user ID in the DB.

Sessions can store sensitive data because the data does not travel
across the Internet but rather only inside the domain server that's
current handling the user's session.

Session is the thing that creates and handles the transmission of
cookies in the first place.

## How Cookies and Sessions work together

> Cookies hold the **Session ID**, set by Session.

Here's how they coorindate thru the req-res cycle:

1. Client: User logs in with their info.
2. Server: Session verifies, creates a server-side session, generates a
   **Session ID**, `set-cookie` header containing Session ID.
3. Client: Stores the SID locally. For future req up to expiry, uses
   this SID cookie to the req.headers.

| Feature              | Cookie                                                             | Session                                         |
| :------------------- | :----------------------------------------------------------------- | :---------------------------------------------- |
| **Storage Location** | Client-side (Browser)                                              | Server-side (Database / Memory)                 |
| **Security**         | Lower (visible to the user in DevTools; requires protection flags) | Higher (hidden away securely on the server)     |
| **Capacity**         | Small (limited to about 4 KB per cookie)                           | Large (limited only by server database storage) |
| **Lifespan**         | Controlled by expiration dates set by the server or browser close  | Controlled by server config                     |
