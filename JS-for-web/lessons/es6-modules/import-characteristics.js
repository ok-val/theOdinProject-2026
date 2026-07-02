// Static import declarations

/**
 * ### Order inside the code
 * 
 * Static import declarations (i.e., using the import keyword) 
 * can only be present in modules at the TOP-level
 * (i.e., not inside blocks or functions, etc.)
 * If an import is to be declared inside these non-module context,
 * I must use dynamic import instead (i.e., import()).
 */


/**
 * The advantage of having a static import method is so that
 * modules can be statically analyzed and linked before getting evaluated
 * and assigned values. This is key for module asynchrony in JS. 
 */


/**
 * ### Forms of import declarations
 * 
 * The assortment of import declarations in "./assorted-import-declarations.js"
 * can be categorized into the following four forms:
 * 
 * * Named import
 * Using this, I can import using their native names
 * import { export1, export2 } from "mod.js";
 * I can also rename named imports accordingly
 * import { export1 as export3, export2 } from "mod.js";
 * I can also using any arbitary literal strings
 * import { "hello there" as export1 } from "mod.js"; // given that export { a as "hello there"};
 * 
 * * Default import
 * import defaultExport from "mod.js";
 * If a default import is to combine with named imports, default imports must be first to declare
 * import defaultExport, * as namedExports from "mod.js"; 
 * import defaultExport, { foo, bar } from "mod.js";
 * And it's also possible to declare default export using curlies, which requires the default keyword
 * import {default as dfltExp, named1, name2 } from "mod.js";
 * 
 * * Namespace import
 * import * as foobar from "mod.js";
 * Here, foobar represents a namespace object which contains all the exports as PROPERTIES.
 * Calling those properties require standard method calling:
 * foobar.helloWorld();
 * 
 * For default namespace, i.e.,
 * import defaultExport from "mod.js";
 * defaultExport.hello();
 * 
 * * Side effect import
 * import "mod.js";
 */



