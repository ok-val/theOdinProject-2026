# NodeJS

Source:

- https://www.theodinproject.com/lessons/nodejs-introduction-what-is-nodejs
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction
- https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU

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

## Architecture

When JS runs in the browser, Chrome's V8 engine compiles JS into machine
code. Normally, without the browser, JS wouldn't run since the computer
does not natively understand JS.

NodeJS is written in C++, compiling JS into machine code. Because of
this direct access to the machine. NodeJS has a different set of
functionality than JS in V8 does (e.g., read-write file).

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
