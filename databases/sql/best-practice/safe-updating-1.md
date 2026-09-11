# Safe updating

4. **Make backup**

   Making backup on an hourly, daily, or weekly basis, depending on the
   size of the database and space available is a common practice. Stale
   data is better than lost data after all.

5. **Replication**

   Another approach is replication, storing multiple copies of the data
   in different places. In case of an outage of one database, the other
   should still be available.

   Tradeoff: This would require much more effort to replicate and often
   means slower performance since write operations have to be performed
   in all of them at the same time.

6. **Granting privileges**

   When a database is accessible by multiple users, make sure to set up
   users and privileges properly from the beginning.

   Start with this general rule, there should only be a few users that
   have full access to the database (like backend engineers).
