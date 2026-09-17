# REST API

Source:

- https://www.codecademy.com/article/what-is-rest-api

## What is a Web API?

An API (Application Programming Interface) is a collection of structured
methods of communication between different components of softwares.

> Web API is the interface created by the back-end: the collection of
> endpopints and the resources these endpoints expose.

> In this context, endpoint is a specific digital location or access
> point within an API. It's basically a URL pointing to a specific web
> server to facilitate request processing.

## What is REST API?

A REST API (an Application Programming Interface that conforms to the
Representational State Transfer principles), also known as RESTful API,

> provides a structured method for accessing and manipulating resources
> using standard HTTP methods (GET, POST, PUT, DELETE)

In REST API, each resource is identified by a unique URI (Uniform
Resource Identifier) where data is exchanged in lightweight formats such
as JSON or XML.

With REST architecture on both sides of the API, implemented
independently of each other and unaware of each other's state, the API
acts as a contract between the client and the server, ensuring
consistent formating of responses and requests.

> Database <=> Web Server <=> RESTful API <=> Apps

## Client-server communication in REST

The clients would sent requests to retrieve or modify resources, while
servers send responses to these requests.

The requests, similar to HTTP requests, would be structured as follows:

- Request line: Method and resource path or the complete URI
- Headers: Parameters such as Accept, Host, User-Agent info,
  authorizations
- Body: Optional info to be sent to the server to processing

The responses, like HTTP responses, would be structured as follows:

- Status code
- Headers: Metadata, Content-type
- Body: The returned resource
