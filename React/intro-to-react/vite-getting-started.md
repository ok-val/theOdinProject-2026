# Getting started with Vite

Source: https://vite.dev/guide/

## What is Vite?

Vite is a **BUILD TOOL** that aims to provide a faster and leaner
development experience for modern web projects.

> Not a library, not a framework, but a BUILD TOOL.

The tool consists of two major parts:

1. A dev server that provides enhancement features for ES Modules
2. A build command that bundles your code, pre-optimized for static
   assets.

Vite is opinionated and comes with sensible defaults out of the box.

## Scaffolding a new project

With npm, run the command:

> npm create vite@latest

(This is same command I see in [[vite-path.md]] minus a few args.)

More details for setting up manually inside an existing repo could be
found in [[vite-path.md]] or in the `interfaceDesign-2026` repo
elsewhere.

## CLI

In a project where Vite is installed, I could the `vite` binary in my
`npm scripts` or run directly with Vite CLI `npx vite`.

```json
{
  "scripts": {
    "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
}
```

The full list of CLI options could be found by running:

> npx vite --help
