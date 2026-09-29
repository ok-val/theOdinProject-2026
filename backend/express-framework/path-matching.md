# Path matching

Sometimes, URLs coming from Clients won't match the routes that we have
specified, or perhaps because they have been updates.

We can use the `app.redirect()` method to deal with these, but listing
them ALL out can be verbose. So express `path` allows either path or a
regex pattern to be evaluated.

```js
// This evaluates for both `message` and `messages`
app.get('/message{s}', () => {});
// Both /foo/bar/baz and /foo/baz work
app.get('/foo{/bar}/baz', () => {});
```

## Two catch-all routing methods

```js
// Catch-all #1
app.use((req, res) => {
  res.status(404).send('404');
});

// Catch-all #2
app.get('/{*splat}', (req, res) => {
  res.status(404).send('404');
});
```
