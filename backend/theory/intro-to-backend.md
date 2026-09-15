# Intro to Backend

Source:

- https://blog.teamtreehouse.com/i-dont-speak-your-language-frontend-vs-backend
- https://www.theodinproject.com/lessons/nodejs-introduction-to-the-back-end
- https://techterms.com/definition/backend

When people talk about `front end`, they mean working with the HTML-CSS-
JS stacks involving the interface --- what users see and hear when using
an app.

> The `back end`, on the other hand, denotes all the things that goes on
> behind the scenes that users do not see: Server and Data stuff.

In contrast with the limited stack on the frontend for
browser-compatibility reasons, the backend stack is more freeform. All
the browser cares about is whether it has received properly formatted
HTML, CSS, and JS amongst other assets.

Core differences:

| **Frontend**         | **Backend**                 |
| -------------------- | --------------------------- |
| User-facing features | App logic & data management |
| Builds interface     | Builds APIs                 |

## What do back-end devs do?

Work with applications, databases, and servers to handle the app logic
and data management and data functionality of a webapp.

Currently, many of these technologies interact with the front-end using
`REST APIs` to form a complete stack.

Backend devs build APIs that front-end devs can use to integrate the
`client-side` with the `server-side`.

The backend could be built using many different languages, including
PHP, Python, Ruby, Java, and JS.

Back-end devs also need to interact with DBMSs like PostgreSQL,
SQLServer, or MySQL for relational DBs or non-relational DBs like
MongoDB.

> Backend processes include:

1. Processing an incoming webpage request
2. Running a script (PHP, ASP, JSP) to generate HTML
3. Acessing data from a database using SQL queries
4. Storing and updating records in DBs
5. Encrypting and decrypting data
6. Handling files uploads and downloads
7. Processing user input via JS

## About them servers

Web apps and databases are typically deployed on a server (such as
Apache or NGINX) which provide:

- Computing resources
- Data storage
- And other capabilities for running apps

Usually back-end devs need some basic working knowledge with Linux OS.

## Popular server-side languages

Some languages are more popular and practical than others. I have a
couple choices:

- Running my own server would give me flexibility in choosing my own
  lang but maintaining it would be a headache.

- Using a cloud server would restrict me to those particular languages.

## Popular tech stack

There are many different tech stacks that companies choose. Here are
some popular ones:

| Acronym  | Stacks                           |
| -------- | -------------------------------- |
| MEAN     | MongoDB, Express, Angular, Node  |
| LAMP     | Linux, Apache, MySQL, PHP/Python |
| JAMstack | JS, APIs, and Markup             |
