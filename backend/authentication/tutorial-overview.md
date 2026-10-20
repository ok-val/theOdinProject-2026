# Tutorial Overview

Source:

- https://www.theodinproject.com/lessons/node-path-nodejs-authentication-basics
- http://www.passportjs.org/

## Required packages

- express
- express-session: a dependency needed by passport to facilitate an auth
  session, provides needed params such as `secret`.
- pg
- passport
- passport-local: The package provides a `Strategy` class, providing
  different _Strategies_ to authenticate users during the session
- ejs

## Part 1: Set up (pre-bcrypt)

1. Set up a basic `app.js`
2. Create 2 basic views: `index.ejs` and `sign-up-form`

All basic stuff. **Note:** `bcrypt` has not been set up.

## Part 2: Authentication

The tutorial adopts the _**Username & Password**_ strategy --- one of
the most traditional, prevalent strategy to authenticate a website.
Support for this mechanism is provided by the `passport-local` package.

Ref: https://www.passportjs.org/concepts/authentication/password/

Authentication requires three main functions to start and sustain an
auth session for users by creating and refreshing the cookie on the
Client's browser while querying the database on every request. They are
all Passport middlewares.

1. `LocalStrategy` function initiates the cookie by quering the
   database, sending the user's auth details ONCE to the `serializeUser`
   function. It finds the user the DB, matches their details, initiates
   the cookie, and thus starts the auth session. _The auth lifecycle
   begins here_
2. `serializeUser` function reads user's auth details from the cookie
   and tell Passport to save it inside the current session, passing it
   to `deserializeUser`.
3. `deserializeUser` function uses the user's auth details to fetch
   matching data from the DB and refreshes the session cookie with fresh
   user details. _`serializeUser` and `deserializeUser` are called on
   every subsequent requests_
