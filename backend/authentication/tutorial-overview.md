# Tutorial Overview

Source:
- https://www.theodinproject.com/lessons/node-path-nodejs-authentication-basics
- http://www.passportjs.org/

## Required packages

- express
- express-session: a dependency needed by passport to facilitate an auth session, provides needed params such as `secret`.
- pg
- passport
- passport-local: The package provides a `Strategy` class, providing different _Strategies_ to authenticate users during the session
- ejs

## Part 1: Set up (pre-bcrypt)

1. Set up a basic `app.js`
2. Create 2 basic views: `index.ejs` and `sign-up-form`

All basic stuff. **Note:** `bcrypt` has not been set up.

## Part 2: Authentication

The tutorial adopts the ***Username & Password*** strategy --- one of the most traditional, prevalent strategy to authenticate a website. Support for this mechanism is provided by the `passport-local` package. 

Ref: https://www.passportjs.org/concepts/authentication/password/


