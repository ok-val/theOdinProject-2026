## Static sites

Source:

- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview

> A static site is one that returns the same hard-coded content from the
> server whenever a resource is requested.

The same hard-coded content means that the content is the same on every
load which is the opposite of pages like Facebook or Instagram where the
content dynamically updates on every load.

For example, if you have a page about a product at
`/static/product-1.html`, this same page will be returned to every user.
All good here, but if you have 1000 products, then having 1000 product
pages is highly inefficient because you would have a lot of repeated
code.

> [!note] Static sites are excellent when you have a small number of
> pages and every page is unique.

### Static site architecture

When a user wants to navigate to a page, the browser sends an HTTP GET
req specifying the URL of its HTML page. The server retrieves relevant
doc from its file system and returns an HTTP resp that contains a status
code.

The server for static site will only ever receive GET requests since it
wouldn't have to store or modify any data.

## Dynamic sties

> A dynamic site is one where some of the response content is generated
> dynamically, only when needed.

HTML pages are normally populated with data from a database into
placeholders in HTML templates.

Whatever is gained in space efficiency on the server side is met with
time overheads from database querying and speed latency compounding.

Most of the code from a dynamic website must run on the server. This
work is known as _server-side programming_.

Requests for dynamic resources are instead routed to additional
middleware to populate the static resources with dynamic resources.

Following the previous example about the product line, the server would
return product data in the database rather than individual HTML files.
It then constructs the HTML page for the response by inserting the data
into an HTML-compatible template. This dynamic conversion process is
handled by the **Web Application** on the server-side.

### Web application routing and processing

The GET request contains a URI (mostly relative URL). When the Web
Server receives this URI, it routes the request to the Web Application
where the Web Application would gather the necessary information based
on the request line, header, and body as instructions.

The Web Application dynamically creates an HTML-compatible resource by
putting the pieces together in its placeholder given some template. This
resource does not have to be an HTML page, it can also be other types of
files (text, PDF, CSV, MOV, MP3) and data files (JSON, XML, etc.)

It then returns this resource back to the client browser via the Web
Server.
