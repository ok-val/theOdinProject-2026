# Validation and Sanitization

For deployed application, one of the most important security aspects is
form validation --- the first step to securing our servers is at the
very form users would use to send requests.

Before a form can be sent to the server along with the method (form
method) for a URL (form action), two important steps are needed:

1. **Validation** ensures user input meets our requirements (e.g.,
   required fields, correct data types/formats).

2. **Sanitization** cleans user input to prevent malicious data from
   being processed in our server by removing or encoding potentially
   malicious characters.
   - Encoding is sometimes considered as a separate concern if one is
     being extra careful.

Express has a library for this use: `express-validator` to help us
streamline this process.

See the installation instructions in the file
'./express-validator-install.md'.

## Encode HTML / escape user input at the boundary of the output

Malicious actors could enter JS scripts into a form, assuming that a
sight maybe using unescaped values.

For EJS, unescaped value is tagged by the scriptlet `<%- %>`, which can
execute code. [https://ejs.co/#docs] This is the same case for when a
script extracts contents using `.innerHTML`. This is called a Cross-Site
Scripting (XSS) attack

```html
<!-- Using hyphen notation -->
<div>Username: <%- name %></div>
```

If a malicious actor comes in and enter
`<script>alert('hacked!')</script>`, the browser will actually run this
code and alert us of the message. This is considered a Cross-Site
Scripting attack.

Therefore, we need to encode this HTML input so that the browser knows
to treate to strictly as text/content rather than executable code.

```html
<!-- Using equal sign notation -->
<div>Username: <%= name %></div>
<!-- The script above will result in the following encoded string -->
<!-- Username: &lt;script&gt;alert(&quot;hacked!&quot;);&lt;/script&gt; -->
```

## Rules of thumbs

1. **What is "Dangerous" depends on the destination**

   For example, characters like `<` or `>` are not dangerous in SQL DBs,
   but is dangerous for HTML code. So escaping is needed here.

   On the other hand, what if a message is to include these characters?
   Like send my friend some code to show off.

   > For such cases, we don't want to encode user input when validating
   > form on the Client side. This is premature validation. Validation
   > should only happen when it's needed.

   That is because of the double-encoding bug.

2. **Double-escaping Bug** / Double-encoding bug

   Consider this lifecycle of a user-input data in the second scenario
   above for when input is prematurely encoded at the point of input:
   1. User inputs: `<script>`
   2. Input-encoding turns it into: `&lt;script&gt;` which is then
      stored into a database
   3. When this data is needed for rendering using the `<%= %>`
   4. The template engine sees `&lt`and escapes the `&` into `&amp;`
   5. Ultimately rendered in the browser as `&amp;lt;script&amp;gt;`
   6. To fix this bug, a dev might be tempted to resort to the unescaped
      `<%- %>` tag which defeats the purpose of encoding anything in the
      first place

3. **Separation of Concerns & Storage Cleanliness**

   Therefore, because security measures differ in different context, a
   wiser dev would separate these concerns, such that:

   - Database should store raw user input. This is industry practice
     because databases don't execute code by default (only as bytes).

   - Flexibility of output: That same raw database record could be sent
     around places like emails, PDFs, APIs or wherever plain text should
     is used

   - Only santize/encoding at the boundary of the output: Use `<%= %>`
     for HTML, SQL queries, or wherever they are needed.

## Implementation

See the files in the miniMessageBoard project to see how this plays out.

### body() function

> The `body()` function allows specify which fields in the `req.body`
> should be validated and sanitized. It only sets up the validation
> check and attaches any error name and messages which will be checked
> by `validationResult()`.

> Think of `body()` as a validation config.

_It does not stop the request of throw errors when a rule fails_.
Instead, it only silently attaches a report of any validation failures.
`validationResult(req)` gathers the validation errors (as specified by
`body()` validation config) into a usable object.

```js
[
  body('birthday', 'Must be a valid date.')
    .optional({
      values: 'falsy' // falsy values will be validated
    })
    .isISO8601() // enforce a YYYY-MM-DD format
];

// There are multiple validation methods for body:

[
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name cannot be empty.')
    .isAlpha()
    .withMessage('Name must only contain alphabet letters.')
];
```

## validationResult() function

> After setting up the validation configs, `validationResult()` compiles
> all the error names and messages that were generated and passed
> forward by `body()`.

`validationResult(req)` returns an object that contains all of the error
information.

This is implemented as a middleware or controller that validates
request.

```js
const middlewareGet = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('404', {
      errors: errors.array()
    });
  }

  // code to run if successful
  next();
};

const middlewarePost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('404', {
      errors: errors.array()
    });
  }

  next();
};

export { middlewareGet, middlewarePost };

// These middlewares are to be called from the routers.
```
