# Install PostgreSQL

1. Download the official installer from:

https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

2. Add PSQL to PATH and check if `psql` has been registered to PATH.

## Set up PostgreSQL

1. Connect the default PostgreSQL database:

> psql -U postgres

Enter the password as prompted

2. Inside the `psql` prompt, create a superuser role matching `whoami`
   along with the password

> CREATE ROLE <windows_username> WITH LOGIN SUPERUSER PASSWORD
> '<your_password>';

3. Create a Database for the role

> CREATE DATABASE <windows_username>;

4. Grant permissions

> GRANT ALL PRIVILEGES ON DATABASE <windows_username> TO
> <windows_username>;

5. Exit out of `psql`:

> \q

6. Add `DATABASE_PASSWORD="<your_password>"` into `~/.bashrc`
