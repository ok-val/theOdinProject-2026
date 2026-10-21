# Passport Overview

Source:

- https://www.youtube.com/watch?v=z7872Nki5FY&list=PLYQSCk-qyTW2ewJ05f_GKHtTIzjynDgjK&index=1

Passport is JS-based framework that provides different Auth strategies
such as Local, Session, and other auth-related methods such as
`.authenticate()`, `.serializeUser`, or `.deserializeUser`.

Technically, PassportJS works with ExpressJS by providing auth logic and
middleware.

There are more than 500 strategies available on Passport and it is the
middleware of choice even for big companies such as Google and Facebook.
Its library contains middlewares that builds on other middlewares to
build what we consider a **Strategy**.

_(Think of a Strategy like a collection of middlewares in specific
orders built for different usecases)_.
