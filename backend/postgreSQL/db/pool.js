import pg from 'pg';

const { Pool } = pg;
/**
 * Since there can only be one pool, we must export an single instance
 * of the class Pool.
 */

export default new Pool({
  host: 'localhost',
  user: process.env['USERNAME'],
  database: 'odin_users',
  password: process.env['DATABASE_PASSWORD'],
  port: 5432 // default port
});
