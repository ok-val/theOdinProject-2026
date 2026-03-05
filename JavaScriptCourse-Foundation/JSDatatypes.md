## JS Data Types and Conditionals

First of all, *JS is a weakly typed language*. It allows for implicit type conversion. JS is considered *dynamically typed* because types are determined at runtime (see sec. below); a variable can hold different types throughout its existence during runtime. 

```js
console.log(5 + "5"); // Results in the string "55"
console.log(5 - "2"); // Results in the number 3
```

For a more statically typed alternative, ~={blue}TypeScript (TS)=~ is a superset of JS that adds a full static type system. TS is widely used in larger-scale operations where type enforcement matters throughout runtime. 

~={black}My reasoning: This makes sense for a language that runs APIs since json formatting are unpredictable across API calls.=~

### Different JS data types

*These are the eight data types in JS.*
Some of these data types are similar to ones that I've already encountered in Python, such as integers, strings, booleans, and objects. The ones that seems a little strange here nulls (this must be like None), undefined, symbols, and bigInts (int ?). 

| Type        | Category      | Essential Meaning / Why It Matters                                                                       |
| ----------- | ------------- | -------------------------------------------------------------------------------------------------------- |
| *Number*    | Primitive     | Represents all numeric values (integers + floats); used for math and counters.                           |
| *String*    | Primitive     | Textual data; core for UI, messages, identifiers, and serialization.                                     |
| *Boolean*   | Primitive     | Logical true/false; drives conditionals and control flow.                                                |
| *Null*      | Primitive     | Intentional “no value”; used to signal emptiness on purpose.                                             |
| *Undefined* | Primitive     | Variable declared but not assigned; signals “not yet set.”                                               |
| *Symbol*    | Primitive     | Unique identifiers; avoids naming collisions in objects.                                                 |
| *BigInt*    | Primitive     | Arbitrarily large integers; needed for high‑precision integer math.                                      |
| *Object*    | Non‑primitive | Collections of key–value pairs; foundation for arrays, functions, classes, and nearly all JS structures. |
### Comparison with Python data types

Recall that *everything is an object in Python*. But which is not the case in JS.

Python objects (e.g., int, float, class, dict) all have their own methods (e.g., `str.upper()`). We categorize JS data type because *most JS data types are primitives, and primitives are not in memory* (or assigned to a memory address).

In Python, every time you assign a variable, it gets assigned to a memory address an object. This does not happen in JS; primitives are wrapped and discard during runtime. The following operations happen during runtime:

- The wrapper is created just for that operation,
- provides the methods,
- and is immediately discarded during runtime.

---
## BigInt

JS number type *can store but cannot represent* ints larger than $(2^{53}-1) = 9007199254740991$ , or less than $-(2^{53}-1)$ for negatives. 

```js
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992 - same
```

BigInt are created by appending `n` to the of an integer:

```js
const bigNum = 5423948750961230490239847n
```

They are not normally used in typical situations. Most use cases are for cryptography to create larger arbitrary number to encrypt things.

---
## Booleans 

Store `true` or `false`. Any value that is NOT `false`, `undefined`, `null`, `0`, `NaN`, or an empty string (`''`) actually returns `true` when tested as a conditional statement.

```js
let is_game_over = true;
let is_player_dead = false; 

let is_four_larger = 4 >= 1; 
```


> [!note] Setting equivalence
> It must be known that `==` means loose equality while `===` means strict equality. (And `=` is for assigning values.) 
> 
> This is how JS allows you to control truthiness and type coercion. 

| Comparison          | `==` Result | `===` Result | Explanation                                                                                                           |
| ------------------- | ----------- | ------------ | --------------------------------------------------------------------------------------------------------------------- |
| `5 == "5"`          | `true`      | `false`      | `==` converts the string `"5"` to the number `5`. `===` sees different types (number vs. string) and returns `false`. |
| `true == 1`         | `true`      | `false`      | `==` converts `true` to the number `1`. `===` sees different types (boolean vs. number) and returns `false`.          |
| `null == undefined` | `true`      | `false`      | `==` has a special rule treating `null` and `undefined` as equal. `===` treats them as different types.               |
| `[1, 2] == "1,2"`   | `true`      | `false`      | `==` converts the array to a string `"1,2"`. `===` sees different types (object vs. string).                          |

### Logical operators: AND, OR, and NOT

`&&` is for AND; `||` is for OR, with `!(operand)` for negation.

```js
if (true && true) {
	console.log("AND")
} else if (true || false) {
	console.log("OR")
} else if (!(false || false)) {
	console.log("NOR")
} else if (!(false && false)) {
	console.log("NAND")
}
```

--- 
## Switch statements

To simply switch between user choices using `if...else` statements are quite verbose. To simplify this, there is some thing called switch statement. 

*Switch statement takes a single expression/value as an input, then look through several choices until it finds one that matches the value, executing the corresponding code that goes along with it.*

This is how it is constructed:

```js
switch (expression|value) {
  case matchingCondition1:
    // run this code
    break; // break out of the code block and move on

  case matchingCondition2:
    // run this code instead
    break;

  // include as many cases as you like

  default: // cannot add addition case after default
    // actually, just run this code
    break;
}
```