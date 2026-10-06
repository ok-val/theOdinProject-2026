# Custom validator

https://express-validator.github.io/docs/guides/customizing/#implementing-a-custom-validator

`express-validator` has a `.custom()` method that takes the value of the
input and evaluates it against a value of another.

```js
app.post(
  '/create-user',
  body('password').isLength({ min: 5 }),
  body('passwordConfirmation').custom((value, { req }) => {
    return value === req.body.password;
  }),
  (req, res) => {
    // Handle request
  }
);
```
