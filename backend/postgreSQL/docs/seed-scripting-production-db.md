# Seed production db

## Hardcoding method

When seeding production db, we are often presented with a problem: As
shown in [[../scripts/create-usernames-tb.js]], the `connectionString`
to our db is hardcoded. When this connection is hardcoded, I would have
to change its value manually depending on which db (remote or local) I
want to seed.

Said file reads values from env vars. So whether it runs in prod or dev
(local) env, I would need to make changes to the env vars of that
environment.

The normal way to seed production db is just to log into the production
server's CLI to alter and run the script.

Alternatively, one common trick to seeding production db is to hardcode
the `connectionString` before it's committed to the PaaS then change it
back to localhost after.

However, the normal way is slightly cumbersome and the alternative
method is slightly risky since I run into the issue of forgetting to
change it back. Thus, there's a third, more convienient method.

## Use command line arguments

Just like how in shell scripting I can provide args from the command
line when invoking a script that accepts params, I can also do this for
node file using the `process.argv` object which contains the arguments
provided in the shell when the file is executed.

To provide a nodejs script with args:

> node db/script.js postgresql://url@etc

Where, positionally:

| Pos | Value           | Meaning                 | process.argv[i] |
| --- | --------------- | ----------------------- | --------------- |
| 1   | `node`          | env $PATH to node       | process.argv[0] |
| 2   | `db/script.js`  | relative path to script | process.argv[1] |
| 3   | `postgresql://` | db URL                  | process.argv[2] |

With this ability to provide our nodejs script with the CLI, we can
_dynamically_ provide db URLs for any db from our CLI.

I can extract this db URLs as `process.argv[2]` as a `const` inside my
script. Then I can seed my local db and prod db using two separate CLI
commands:

> node db/script.js postgresql://localdb@etc

> node db/script.js postgresql://proddb@etc
