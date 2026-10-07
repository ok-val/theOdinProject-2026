# Install node-postgres in Express

1. Install node-postgres

> npm install pg

2. Initialize it in the app with the connection information

```js
import pg from 'pg';

const { Pool } = pg;
/**
 * Since there can only be one pool, we must export an single instance
 * of the class Pool.
 */

export default new Pool({
  host: 'localhost',
  user: 'val.ngn',
  database: 'odin_users',
  password: process.env['DATABASE_PASSWORD'],
  port: 5432 // default port
});
```
