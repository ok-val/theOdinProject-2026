# Lifecycle of a Request

Source:

- https://www.codecademy.com/article/what-is-back-end-architecture

Consider a concrete example of a lifecycle of a request:

1. Anna is shopping for plants on `GreenMother.com`. She clicks on a pic
   of a corn plant, which makes a `GET` request to:
   `http://www.GreenMother.com/products/68345`

   The request line consists of the HTTP method -- GET, the URI (which
   includes the resource path: `/products/68345`)

2. Anna's request is received by one of GreenMother's server. The speed
   of its travel depends on many factors such as bandwidth and distance,
   but speed is usually the bottleneck. This is why major websites have
   servers distributed geographically to speed up users' requests.

3. Event listeners of server-side apps receive the request, route the
   request, find a match, then pass delegate the appropriate middleware
   to begin response generation.

4. The middleware handlers do their thing according to what the webpage
   is supposed to show. It may query the database to retrieve the price,
   size options, care instructions, auxiliary products links, and other
   resource paths that points to some images.

5. The database returns the queried results. Note that database querying
   is also one of the slower steps (so much so that query tuning is a
   thing), plus the database might exist in another machine than the web
   server, adding more traveling overheads.

6. The server receives the data it needs from the database that was
   processed by the middlewares. The server-side app constructs and
   sends its response back to the client according to the API structured
   format.

7. The response travels across the internet, back to Anna's computer.

8. Anna's browser receives the response and renders the resources.
