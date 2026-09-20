# Install nodemon npm package

Source:

- https://www.npmjs.com/package/nodemon

`nodemon` is a tool that helps develop Node-based application by
automatically restarting node application when file changes in the dir
is detected.

## Local install

> npm install -D nodemon

To `package.json`, add a script to execute nodemon, such as start:

```json
  "scripts": {
    "start": "nodemon server-routing.js"
  },
```
