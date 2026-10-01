# How do PaaS services work?

- https://www.theodinproject.com/lessons/node-path-nodejs-deployment

PaaS providers work by giving access to a few resources that any Node
app need to function and serve data to the clients. Here's a list of
those resources:

1. **Server Instances** (of virtual computers): These virtual computers
   run the app. One instance can handle an ample amount of traffic and
   the number of instances can increase to scale with the userbase.

2. **Databases:** PaaS provides databases that make it easy to create
   and deploy, doing the setup and configurations for you.

   Many providers even manage backups, security updates, and maintain
   the underlying tech for you, offering peace of mind.

3. **Domain names:** PaaS providers give out random domain names. Custom
   domain names are up for purchase on `Porkbun` or `NameSilo`. Find a
   domain name by using `Domainr`.
