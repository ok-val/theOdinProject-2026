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
