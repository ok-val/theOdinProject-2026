# REST Principles

**REST --- Representational State Transfer** is a well-known
_architectural style_ used for _providing standards_ between computer
systems.

Its main goal is to simplify interactions between clients and servers by
providing a consistent, resource-based approach to accessing and
manipulating data.

REST-compliant systems, often called RESTful systems, are defined by two
key principles:

- Client-server independence
- Statelessnesss

## Client-Server independence

In the REST architectural style, the implementation of the client and
the server can be done _independently_ without each knowing about the
other. Thus, the codes on the client-side can change independently of
the codes on the server and vice versa, benefiting from _modularity,_
_flexibility, and scalability_.

> The only thing that both agents need to know is the _format of the_
> _messsages_ to send to each other.

## Statelessness

**RESTful systems are stateless:** The server needs not to know anything
about the state of the client and vice versa.

Both agents may understand any message received, even without seeing
previous messages.

Client-Server architecture and statelessness are the constraints that
help RESTful applications achieve modularity, flexibility, and
scalability in which components can be managed, updates, and reused
without disrupting the overall system, even during operation.
