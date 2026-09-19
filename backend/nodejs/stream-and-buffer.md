# Stream and Buffer

## Buffer

> Buffer is temporary chunk of raw memory allocated outside the V8 JS
> engine. A buffer handles binary data (e.g., images, video, or data
> packets), created because JS historically work well with text strings.

A buffer is accessible globally.

```js
const buf1 = Buffer.alloc(10);

const buf2 = Buffer.from('hello');

console.log(buf1);
console.log(buf2);
```

## Stream

> A Stream is a continuous flow of data that is broken down into small
> pieces and processed over time. Instead of reading an entire 2 GB file
> into memory all at once, a stream reads it piece-by-piece.

There are four primary types of streams in Node:

1. **Readable:** `fs.createReadStream`
2. **Writable:** `fs.createWriteStream`
3. **Duplex:** Streams that can both read and write
4. **Transform:** A type of Duplex stream that modifies or changes data
   as it passes thru
