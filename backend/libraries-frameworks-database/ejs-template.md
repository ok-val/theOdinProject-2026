# EJS template

The use of EJS template is equivalent to SSR.

1. Use the EJS tag in the `.ejs` file:

   - Compute variables:

     ```html:ejs
     <% const name = 'val' %>
     ```

   - Insert computed variable:

     ```html:ejs
     <p><%= name %></p>
     ```

2. Pass the data externally from the route handler into `.ejs` view:

   ```js
   // server code
   app.get('/ejs-template', (req, res) => {
     const movies = [
       { title: 'Mon Oncle', year: 1958 },
       { title: 'Rear Window', year: 1954 }
     ];
     res.render('ejs-template', { title: 'Home', movies });
   });
   ```

   ```html:ejs
   <!-- Inside the ejs views's html -->
   <% if (movies.length > 0) { %>
     <% movies.forEach(mov => { %>
       <h3 class="movie-title"> <%= mov.title %></h3>
       <p class="movie-year"> <%= mov.year %></p>
     <% }) %>
   <% } else { %>
     <p>There is no movies to display...</p>
   <% } %>
   ```

3. Pass partial view into the full view using the method `include()`

   ```html:ejs
   <%- include('./partials/nav.ejs') %>
   ```
