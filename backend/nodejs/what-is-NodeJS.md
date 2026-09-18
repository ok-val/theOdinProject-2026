# NodeJS

Source:

- https://www.theodinproject.com/lessons/nodejs-introduction-what-is-nodejs
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction

> NodeJS, or simply Node, is an JS runtime that is driven by
> asynchronous event, following a non-blocking I/O model.

**Problem:** JS only runs in browser... Everything devs do with JS is
confined within the browser.

**Solution:** Node brings JS out of browser-land, allowing devs to use
JS to do other things INCLUDING server-side things that other popular
server-side languages can do. 👈(ﾟヮﾟ👈)

Additionally, Node uses a non-blocking input/output model because it is
fundamentally async event driven, mandating that functions that can be
offloaded to Node will be offloaded to run async to avoid blocking i/o
or blocking the stack.

Some of these functionalities are not native to vanilla JS, such as
reading and writing local files, creating HTTP connections an listening
to network requests.

## What does being event driven mean?

These functions are principly governed by `async events`. Node contains
a collection of smaller function that get called in response to specific
events, such as network requests.

Recall from [[JS-for-web\lessons\async\what-is-event-loop.md]] that
event driven tasks are tasks that are returned by APIs to the
`task queue` and only runs after all the synchronous call stacks have
executed. They have a different lifecycle than sync code.

## THE THINGS YOU CAN DO WITH NODE

Source:

- https://blog.teamtreehouse.com/7-awesome-things-can-build-node-js

You can even build a CLI with a Node???
