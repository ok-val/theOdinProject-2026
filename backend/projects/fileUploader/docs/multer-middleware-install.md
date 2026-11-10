# Install Multer Middleware

Source:

- https://github.com/expressjs/multer

---

1. Install `multer` with npm:

> npm i multer

2. Add `enctype` to the HTML form:

```html
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>
```

3. Import `multer` into controllers:

See '../controllers/file.controller.js/' for implementation.

With a single `upload` middleware, the file is now accessible in the
file system.
