// Re-exporting / Aggregating / Relaying

// A module can also relay values exported from other modules
// without have to writing two seperate import/export statements.
// This comes with a caveat.

export { default as function1, function2 } from "bar.js";

// Using this methods prevent the relayed functions from being usable 
// in the barrel module itself.

