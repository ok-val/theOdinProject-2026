## Session Store

By default, libraries like `express-session` store session data in RAM.
This is fine for local testing, but scales poorly.

> Session store connects the app to an external database to persist this
> user data.

## Benefits

1. **Preventing memory leaks:** Without a store, every time a user logs
   in, their session object (with the SID) is saved into RAM. Server RAM
   doesn't scale on demand. And so leakages will happen and degrade
   in-RAM memory.

   With a store, session objects are offloaded onto an external DB,
   Server only needs to hold a simple pointer, keeping the RAM usage
   low.

2. **Better load balancing:** Without a store, other satelites server
   cannot work together optimally (again, because of local storage, user
   data is simply hardcoded into a Server, making it harder to
   coordinate between satelites). If user logs into Server A, then tries
   to access a domain on Server B, user data hardcoded on Server A needs
   to get transferred to Server B. Otherwise, Server B just starts a new
   SID. :(

   With a store, user data is decentralized from any particular Servers,
   making it easier for satelite Servers to access. Any Servers could
   look up for the SID instantly.

3. **Server Restart Persistance:** Without a store, if a Server crashes,
   what then +_+ ? All in-RAM sessions are wiped out instantly.

   With a server, restarting even the local Server doesn't affect the
   SID persistance at all since the Server gets it from another server
   anyways.
