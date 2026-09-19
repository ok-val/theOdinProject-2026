# Node File System module

Source:

- https://github.com/nodejs/nodejs.dev/blob/aa4239e87a5adc992fdb709c20aebb5f6da77f86/content/learn/node-js-modules/node-module-fs.en.md
- https://nodejs.org/learn/manipulating-files/writing-files-with-nodejs
- https://nodejs.org/learn/manipulating-files/reading-files-with-nodejs

This link contains all the API of the `fs` module.

> Node's `fs` module allows interacting with the OS file system,
> enabling actions like reading, writing, updating, deleting, and other
> management functionalities.

## What is a stream in file system context?

> In Node file operations, a stream refers to continuous sequence of
> data being read from or written to a source in discrete chunks rather
> than loading the entire file into memory.

By default, Node streams process data in 64 KB chunks.

For example, reading/writing a 4 GB file won't consume 4 GB of RAM.

## Writing files

**Syntax:**

```js
fs.writeFile(path, content, { flag: '' }, (err) => {});
```

Common flags:

| Flag | Desc.                                             | File gets created if none exists |
| ---- | ------------------------------------------------- | -------------------------------- |
| r+   | Opens the file for reading and writing            | ❌                               |
|      |                                                   |                                  |
| w+   | Opens the file for reading and writing and also   | ✅                               |
|      | positions the stream at the _beginning_ of file   |                                  |
|      |                                                   |                                  |
| a    | Opens the writing and positions the stream at the | ✅                               |
|      | _end_ of file                                     |                                  |
|      |                                                   |                                  |
| a+   | Opens the file for reading and writing and also   | ✅                               |
|      | positions the stream at the _end_ of file         |                                  |

---

**Callback method:**

```js
import fs from 'node:fs';

const content = 'My first content written into a file using node:fs';

fs.writeFile('../dummy-files/write-test.txt', content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File written successfully!');
  }
});
```

**Sync method**

```js
import fs from 'node:fs';

const content = 'My first content written into file using node:fs';

// writeFileSync doesn't have a built in err handler callback
try {
  fs.writeFileSync('../dummy-files/write-test.txt', content);
} catch (err) {
  console.error(err);
}
```

**Promise method**

```js
import fs from 'node:fs/promises';

const content = 'My first content written into file using node:fs';

try {
  await fs.writeFile('../dummy-files/write-test.txt', content);
} catch (err) {
  console.error(err);
}
```

### Appending content to file

```js
fs.appendFile(path, content, { flag: '' }, (err) => {});
```

## Reading file

The `fs.readFile()` method takes a file path, encoding, and a callback
function that will be called with the file data.

Just like for writing file, there are three variations of read:

**Callback**

```js
import fs from 'node:fs';

fs.readFile('../dummy-files/read-test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

**Sync**

```js
import fs from 'node:fs';

try {
  const data = fs.readFileSync('../dummy-files/read-test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
```

**Promise**

```js
import fs from 'node:fs/promises';

async function fsReadFile() {
  try {
    const data = fs.readFile('../dummy-files/read-test.txt', {
      encoding: 'utf8'
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

The article also covers how to do file streaming for larger file
content. Make sure to revisit:

- https://nodejs.org/learn/manipulating-files/reading-files-with-nodejs
