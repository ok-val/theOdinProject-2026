# Install bcrypt

Source:

https://www.theodinproject.com/lessons/node-path-nodejs-authentication-basics

```terminal
npm install bcryptjs
```

# NEVER STORE RAW PASSWORDS INSIDE DATABASES

# NEVER STORE RAW PASSWORDS INSIDE DATABASES

# NEVER STORE RAW PASSWORDS INSIDE DATABASES

**Note:** The implementation of `bcrypt` in C++, which is a faster and
more widely used in production. `bcryptjs` is good enough for now.

## Storing hashed password

To review, hashing a password involves passing it through a pure hash
function, mapping variable sized inputs to fixed size pseudo-random
outputs.

Note that hashing is not the same as encrypting: Whereas encryption
involves decryption to reverse the encrypted string back into its
original form, hashing is irreversible, meaning that data cannot be
recovered after it has been hashed.

`bcrypt` provides some useful securing features for passwords. For now,
I'm just using its `.hash()` method and storing that inside the DB.

## Salting

Salting, as provided as the second param in `bcrypt.hash()`, adds extra
random chars to it before feeding it to the hashing function. The goal
of salting is to make a password more unique, especially for users who
use the same password and for protection against rainbow tables and
dictionary attacks.

Usually, the salt is stored in DB with the hashed value. But `bcrypt`
hashing algo incorporates the salt within the hash already.

Here's the created entry for the new user 2:

| id  | username | password                                                     |
| --- | -------- | ------------------------------------------------------------ |
| 1   | orio     | orio123                                                      |
| 2   | honeypot | $2b$10$82u3hJxJbYO0ridbq4F2X.RisHTEv27YLLf6ZU2QMGkLYqPZsRFcG |
