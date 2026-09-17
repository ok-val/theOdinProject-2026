# What is Back-end Architecture?

Source:

- https://www.theodinproject.com/lessons/nodejs-introduction-what-is-nodejs
- https://www.codecademy.com/article/what-is-back-end-architecture
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction

> Backend architecture is the structuring of the code, tech stack, and
> client relationship that involve in the server.

## Meet the two agents: Client and Server

### What are clients?

The clients are anything that send request to the back-end.

Clients are often desktop/mobile browsers, mobile app, another server,
or even smart gadgets/appliances.

### What is a server?

> A server is simply a computer that listens for incoming requests.

Any computer that's connected within a network can act as a server. When
developing apps, one should just use their own computer as a server.

## Backend components: Server, App, Database

### What is a Web API?

An API (Application Programming Interface) is a collection of structured
methods of communication between different components of softwares.

> Web API is the interface created by the back-end: the collection of
> endpopints and the resources these endpoints expose.

### What is the back-end?

The back-end is all the tech that processes incoming requests from
client for which it generates and sends responses back to the client.

> [!important] What is the back-end made up of?
>
> The back-end is made up of 3 major parts:
>
> - Server: The computer that receives requests
> - App: Server-side applications that listen to and process requests
> - Database: Where server organizes and stores data

### Server-side app

The server runs two types of apps:

- Request listeners
- Middlewware

When an HTTP method is combined with a URI, it is called a **route**,
and the processing of matching a route is called **routing**.

Each route can have one or many handler functions that are executed
whenever a request to that route is matched.

> In this context, middleware is any code that executes between the
> server receiving the request and sending the response.

Middleware functions might modify the request object, query the database
to deliver the requested information.

A framework like Express or Ruby on Rails is used to simplify the logic
of routing.
