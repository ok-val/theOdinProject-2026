# Which Auth Strat should I use?

## Authentication vs Authorization

> Authentication is about WHO the user is.

> Authorization is about WHAT the user can do.

Authentication and Authorization looks at different things. It's best to
think of them as different concerns of rights-giving for the user: The
first looks at WHO is currently using the service, and the second looks
at WHAT they can do based on who they are.

In implementation, they are often done together, such that an
authenticated user, upon a successful log-in, immediately gets access to
certain resources (i.e., welcome page).

## Popular Auth Strats

Here are some of the most popular Auth choices, ascending in complexity
and applicability in scale, separated by scopes of concerns.

**Authentication**

- Session (aka Local strat)
- JSON Web Tokens (JWT)

**Authorization**

- OAuth (popular for big services such as GitHub to provide users with
  APIs)
  - In-house
  - SaaS

- Other/Custom Strat

In choosing an Auth Strat, think about the whether the app needs
Authentication vs Authorization, and secondly the scale of the app.
