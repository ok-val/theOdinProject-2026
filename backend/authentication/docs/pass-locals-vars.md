# Passing Locals Vars

In Express, the `res.locals` carries all of the vars that were passed
into it.

1. Via Response options: The most common way of attaching a locals.var
   is through the response options in a middleware:

   ```js
   app.get((req, res) => {
       res.render('page', { title: 'Hello world' });
   };
   ```

   This `title` is now _specifically_ attached to the current `res`.

2. Via `res.locals` property: Reversedly, to make a locals' var globally
   accessible for the rest of the app, I could assign it to a variable
   inside said property via middleware:

   ```js
   app.use((req, res, next) => {
     res.locals.persistentVar = req.persistentVar;
     next();
   });
   ```

   Attach this before rendering the view (or any other prerequisites)
   and I will have access to this variable through out the whole app.
