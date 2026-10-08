import pool from './pool.js';

async function getAllUsernames() {
  const { rows } = await pool.query('SELECT * FROM usernames');
  return rows;
}

async function insertUsername(username) {
  await pool.query('INSERT INTO usernames (username) VALUES ($1)', [
    username
    /**
     * this function runs in the psql terminal similarly to a shell exec
     * such that `exec <[...args]>` accepts params from the CLI
     *
     * In this case, `username` is provided as positional arg $1 for
     * this exec may be running a for loop
     * (e.g., `for param in "$1" "$2"; do`)
     * and so on.
     */

    /**
     * Alternatively, one may consider templating the query as such:
     *
     * pool.query(`INSERT INTO usernames (username) VALUES (${username}));
     *
     * This presents a vulnerability for SQL injection where malicious
     * user could enter an SQL command that would wreak havoc to our
     * system.
     *
     * Thus, the previous implementation provies what's called
     * _query parameterization_ which prevents this by providing the
     * list of query params into list as the second param of the query
     * method.
     */
  ]);
}
export { getAllUsernames, insertUsername };
