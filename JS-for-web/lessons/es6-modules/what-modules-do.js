// With ES6 Modules, we have more control over top-level scopes.
// It introduces another layer of scope to prevent global scopes from leaking.
// We can what things to export from one file,
// and also what things to import into another.
// So just because we export something, it doesn't mean that it would be 
// automatically available elsewhere. 


// One thing to distinguish is that module scope is not the global scope
// Each module has its own private scope,
// import/export act as gates for communication between files. 

// There are two types of import and export: default and named

// ## Named imports/exports
// (from appendix-module-one.js)
// As the name implies, named exports can denomainatively export vars
// export { something };
// import { something } from "./";

// ## Default imports/exports
// (from appendix-module-two.js)
// In contrast to named exports, a file can only default export a SINGLE thing
// But we can immediate name the imported thing in the importing line
// export default "Hello there;"
// import geo1239 from "./"; // imports the one and only "Hello there"


// ## Combined imports
// Interestingly, there are no set rules for when to use which
// And I can also combine the two export methods, which I will demo here:
import greeting123, { farewell1 } from "./appendix-module-default";
// in which greeting123 is imported from greeting2 in that file by default

console.log(greeting123); // Hi bear
console.log(farewell1); // bur bur buu