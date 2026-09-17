# HTTP requests

Source:

- https://www.codecademy.com/article/what-is-http

Hypertext Transfer Protocol (HTTP) is used to structure requests and
responses over the internet. HTTP requires data to be transferred from
one point to another point in the network.

TCP (Transmission Control Protocol) handles the transfer of resources
between the browser and the server.

> HTTP is the schematic language that devices on both sides of the
> connection, being mediated by TCP, must follow to communicate.

| HTTP                             | TCP                                           |
| -------------------------------- | --------------------------------------------- |
| Structure requests and responses | Transmit resources between server and browser |

> [!definition] HTTP request
>
> An HTTP request is a structured message that a client (e.g., browser,
> mobile app, or API tool) sends to request a resource (e.g., HTML
> pages, images, files, DB records) or trigger an action.

## Structure of HTTP requests

1. **Request line:** Specifies the:
   - HTTP method: `GET`, `POST`
   - Resource path: `/index.html`
   - Protocol version: `HTTP/1.1`

2. **Headers:** Provide additiona context or metadata about the request.
   Common headers include:
   - Host: Indicates the domain name of the server (google.com)
   - User-agent: Identifies the client (e.g., Chrome, Firefox)
   - Accept: Informs the server what type of content the client can
     handle (e.g., HTML, JSON)
   - Authorization: Sends authentication credentials when accessing
     protected resources

3. **Body** (optional): Includes data sent to the server (typically in
   POST, PUT, or PATCH requests). For example, when submitting a form,
   the username and password are sent in the body.

   Upon receiving the HTTP request, the server processes it according to
   the provided instructions (in the request line and headers).

   ```
   GET / HTTP/1.1
   Host: www.codecademy.com
   ```

## Structure of HTTP response

If successful, the response should contain:

- A status code (200 OK, 404 Not Found, 500 Internal server error)
- Response headers with metadata
- Optional response body (e.g., webpage, JSON data, or image)

```
HTTP/1.1 200 OK
Content-Type: text/html
```

### Request/Response Structure summary

| **Request**  | **Response** |
| ------------ | ------------ |
| Request line | Status code  |
| Headers      | Headers      |
| Body (opt)   | Body (opt)   |

## Types of HTTP requests

HTTP spports several request methods. Here are the most common ones:

| **Method** | **What it does**                                         |
| ---------- | -------------------------------------------------------- |
| GET        | Retrieves data from server (e.g., for loading a page)    |
| POST       | Sends data to the server                                 |
| PUT        | Updates existing data on the server                      |
| DELETE     | Removes specified data from the server                   |
| HEAD       | Retriieves ONLY headers of a resource, not content       |
| PATCH      | Applies partial modifications to a resource              |
| OPTIONS    | Describes communication options available for a resource |

## Example of a request

```http
GET /en-US/search?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev HTTP/1.1

<!-- Header -->
Host: developer.mozilla.org
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/
Accept-Encoding: gzip, deflate, sdch, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true
```

In which:

**Request Line (First Line)**

- Request Type / Method: GET — Defines the action to perform (fetching a
  resource without modifying server data).

- Target Resource URL / Path: /en-US/search — The base endpoint/path
  being requested on the server.

- URL Parameters (Query String):
  ?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev
  — Name/value pairs separated by & that encode search terms (q) and
  filters (topic).

- Protocol Version: HTTP/1.1 — Identifies the specific HTTP standard
  version used.

**Headers (Metadata)**

- Target Host: Host: developer.mozilla.org — Specifies the domain name
  of the target server.

- Connection & Upgrade: Connection: keep-alive and
  Upgrade-Insecure-Requests: 1 — Manage persistent connection
  preferences and security upgrades.

- Cache Control: Pragma: no-cache and Cache-Control: no-cache —
  Directives to bypass cached copies and retrieve fresh data.

- User Agent: User-Agent: Mozilla/5.0 ... Chrome/52.0... — Details about
  the client browser, OS, and rendering engine.

- Accepted Formats & Encodings: Accept, Accept-Encoding: gzip, deflate,
  sdch, br, and Accept-Language: en-US,en;q=0.8,es;q=0.6 — Specify the
  MIME types, compression methods, and languages the browser can handle.

- Referer: Referer:
  [https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/)
  — The address of the web page that originated the request.

- Cookies (Final Line of Header)
  - Client-Side Cookies: Cookie: sessionid=...

**Body**

Request Body: (Empty) — GET requests do not encode data in the body
(unlike POST requests).

## Example of response

```http
HTTP/1.1 200 OK
Server: Apache
X-Backend-Server: developer1.webapp.scl3.mozilla.com
Vary: Accept, Cookie, Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:11:31 GMT
Keep-Alive: timeout=5, max=999
Connection: Keep-Alive
X-Frame-Options: DENY
Allow: GET
X-Cache-Info: caching
Content-Length: 41823

<!doctype html>
<html lang="en-US" dir="ltr" class="redesign no-js" data-ffo-opensanslight=false data-ffo-opensans=false >
<head prefix="og: http://ogp.me/ns#">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <script>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);</script>
  …
```

In which:

**Status line (first line):**

- HTTP/1.1: The HTTP protocol version used.
- 200: The numeric HTTP status code indicating the request was
  successful.
- OK: The status text (reason phrase) associated with code 200.

**Header:**

- Server: Apache — Identifies the web server software handling the
  request.

- X-Backend-Server: developer1.webapp.scl3.mozilla.com — A custom header
  indicating the specific backend server node that generated the
  response.

- Vary: Accept, Cookie, Accept-Encoding — Instructs caches that the
  response varies depending on the client's Accept header, user cookies,
  and supported encoding.

- Content-Type: text/html; charset=utf-8 — Declares the MIME type of the
  returned document (HTML) and its character encoding (UTF-8).

- Date: Wed, 07 Sep 2016 00:11:31 GMT — The exact date and time the
  response was generated.

- Keep-Alive: timeout=5, max=999 — Parameters for persistent connection
  management (keep connection open for 5 seconds or up to 999 requests).

- Connection: Keep-Alive — Indicates the network connection will remain
  open for subsequent requests.

- X-Frame-Options: DENY — A security header preventing the page from
  being embedded inside an `<iframe>` on other sites.

- Allow: GET — Lists the allowed HTTP methods for this resource.

- X-Cache-Info: caching — A custom header indicating the caching status
  of the response.

- Content-Length: 41823 — The size of the payload body in bytes.

Empty line (CRLF line ending)

**Body (payload):**

- Starts with the standard HTML boilerplate code, followed by the
  requested content.
