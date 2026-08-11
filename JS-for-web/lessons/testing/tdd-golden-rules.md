## The Three Steps

1. Quickly write a test with some success/fail conditions (Start with Red)
2. Write just enough code to pass the test (Messy yellow)
3. Refactor code later (Clean green)

## Isolate the function/responsibility for testing

General OOP principles such as Single Responsibility applies here too;
When testing a logic function, try to segregate all DOM functionalities.
And so on!

## Prefer pure functions

### What is a pure function tho?

1. Always return the same res for same args
2. LET THERE BE NO STATES (and side effects as a consequence)

### What are side effects tho?

- Request HTTP, machine data
- Mutating data
- Any DOM manipulation
- Any probabilistic operations (e.g., Math.random())

```js
// Impure functions
const tax = 20 / 100;
function calcTax(price) {
    return calcTax * (1 + tax);
    // b/c it uses global values which are subject to change
}
```

### So why are pure functions preferred?

1. EASIER TO TEST
   Because of its deterministic behavior, making it **easier to test**.
   You wouldn't want to test unpredictable behaviors, would you?
2. EASIER TO ISOLATE
   It's also easier to extract that entire function for testing or
   refactoring around without having to worry about breaking the
   surrounding code.
