# Node Event emitter

Source:

- https://nodejs.org/learn/asynchronous-work/the-nodejs-event-emitter
- https://github.com/nodejs/nodejs.dev/blob/aa4239e87a5adc992fdb709c20aebb5f6da77f86/content/learn/node-js-modules/node-module-events.en.md

Just like how JS in the browser uses Event Listeners to handle user
interactions, Node offers a similar system for the backend using the
`events` module.

```js
import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();
```

As for basic usage, the `on` and `emit` methods allows to:

- `on` adds a callback to be called when the even is triggered
- `emit` trigger an event manually.

```js
// create a 'start' event that logs 'started' to the console
eventEmitter.on('start', () => {
  console.log('started');
});

// call the 'start' event using
eventEmitter.emit('start');
```
