# Connect Railway database

Before this can be set up, a service must have been deployed on Railway
to get started. The main goal of this exercise is to get the correct
proxied domain of the db so that we could execute command on it from our
computer.

1. R-Click on the canvas > Add a postgreSQL db

2. Click on the postgreSQL node that was just created > Go to `Console`

3. Create a new database here (refer to
   [[../postgreSQL/docs/postgres.install.md]]) for more details

4. Go to the `Settings` > Networking, set up Public Networking. This
   creates a proxied domain that points to the default 5432 port of our
   virtual machine.

5. Go to `Variables` tab to find the newly created `DATABASE_PUBLIC_URL`
   there. This value is not yet ready to use.

6. The UI should prompt to redeploy. Redeploy and extract the computed
   value of `DATABASE_PUBLIC_URL`. It's now ready to use.

Optional:

- If a different db was created for use instead of the default `railway`
  make sure to update this in `Variables` > `POSTGRES_DB`. Redeploy to
  compute the new `DATABASE_PUBLIC_URL`.
