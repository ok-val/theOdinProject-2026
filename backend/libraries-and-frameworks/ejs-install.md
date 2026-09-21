# Install and config EJS (a view engine)

https://www.npmjs.com/package/ejs

> npm i -D ejs

1. Set the `node` app to use `ejs` as the view engine

```js
// Config the view engine
app.set('view engine', 'ejs');
// Config the views folder location
// app.set('views', 'viewsfolder');
```

2. Config the `views` folders with all `.ejs` files

```
views/
├─ home.ejs
├─ about.ejs
├─ 404.ejs
```
