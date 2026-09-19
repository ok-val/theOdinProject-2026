import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('started on 1');
});

eventEmitter.emit('start');

eventEmitter.on('end', (go, end) => {
  console.log(`going on ${go}, ended on ${end}`);
});

eventEmitter.emit('end', 2, 3);

console.log(eventEmitter.eventNames());
console.log(eventEmitter.eventNames().length);

/**
 * Get the max amount of listeners that can be added to an Event Emitter
 * object. 10 by default; can be changed to a different value using
 * emitter.setMaxListeners()
 */

console.log(eventEmitter.getMaxListeners());
eventEmitter.setMaxListeners(8);
console.log(eventEmitter.getMaxListeners());

eventEmitter.off('start', () => {
  console.log('started on 1');
});

// eventEmitter.emit('start');
