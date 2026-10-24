import pgSimple from 'connect-pg-simple';
import session from 'express-session';
import pool from '../models/pool.js';

const pgStoreClass = pgSimple(session);
const pgSessionReqHandler = session({
  store: new pgStoreClass({ pool: pool }),
  secret: process.env['SESSION_SECRET'],
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 2 * 60 * 60 * 1000 }
});

export default pgSessionReqHandler;
