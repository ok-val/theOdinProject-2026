# connect-pg-simple Installation

Source:

- https://www.npmjs.com/package/connect-pg-simple

```terminal
npm i connect-pg-simple
```

## Setting up a `Session Table` to store the SIDs

Use the `table.sql` file to create a new table inside the primary DB:

```terminal
psql odin_authentication_basics -f node_modules/connect-pg-simple/table.sql
```

## Usage

See `app.js` for implementation.

## After implementing Session Table

### In the Client

Log in to the app. Upon inspecting
`DevTools -> Application -> Storage -> Cookies`, see that the
`connect.sid` cookie has been set by `localhost` using the correct the
MaxAge option that I specified.

### In Server DB

SELECT * from session table to see that the entry of the matching SID
matches exactly what the Client receives.
