## Many paths

There are many paths to creating a React app.
For this implementation, I'm following the Vite-React path using Vite
CLI. This is one of the simplest path recommended by TOP.

## Creating a new project

1. Install create-vite with the React template

> npm create vite@latest my-first-react-app -- --template react

Here's what the command does automatically:

1. Create a project folder called `my-first-react-app`;
2. Generate starter files with all the boilerplate codes that needed to
   get started immediately;
3. Configure all the build tools, specifically making the environment
   ready to work with React with the flag `--template react`.

## Using an existing repo

Alternatively, if I already have a cloned repo or an original repo that
I want to initiate this way, use the following command instead:

> npm create vite@latest . -- --template react

This tells Vite to use the current dir for the project, instead of
creating a new dir with a given project name.
