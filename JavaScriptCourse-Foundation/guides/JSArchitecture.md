## The components of a JS Engine

### 1. Parser

**Job:** Turn raw text into *a structured representation* called *Abstract Syntax Tree (AST)*.  

When we write:

```js 
console.log("foo bar");
```

The parser tries to read this following JS grammar:

* If the grammar fails ➜ SyntaxError
* If grammar passes ➜ the AST is produced

If we refer to [[understandingErrors]], code such as `hoo bar` would fail at parsing because there is no operator, resulting in a SyntaxError before the code reaches AST. On the other hand, code such as `hoobar` would pass as valid grammar and proceed to AST.

### 2. Abstract Syntax Tree (AST)

**Job:** A *tree representation* of our code---a schematic resulted by the parser. 
If the code makes it to this, it has passed the parser---Congrats, code :)

### 3. Interpreter 

**Job:** Execute the AST or bytecode---this is *where runtime happens*.

Thus, this is where runtime errors occur *(e.g., ReferenceError, TypeError, LogicError, RangeError)*. This means that the syntax works fine, but something is wrong in the running order or logic.

### 4. JIT Compiler

**Job:** Optimize hot code paths into machine code. 

Let's revisit our [[glossary]] (at Interpreted vs Compiled Code). This is why JS is not purely an interpreted language because this layer of compilation *watches what the interpreter does and complies frequently-run code into fast native instructions,* making JS much faster (good for website).

### 5. Runtime / Standard Library

**Job:** Provide built-ins functions and objects for us to use such as: Array, String, Error, Math, and even DOM APIs.

