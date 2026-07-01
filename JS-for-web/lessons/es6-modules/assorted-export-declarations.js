// exporting declarations

export let name1, name2; // also var
export const name3 = 1, name4 = 2;
export function functionName() {};
export class ClassName {};
export function* generatorFunctionName() {};
export const { name1, name2: bar } = o;
export const { name1, name2 } = array;


// export list

export { name1, nameN };
export { var1 as name1, var2 as name2 }; // you can also rename named exports
export { var1 as "string name" };
export { name1 as default };


// default exports

export default expression;
// Note that expression can be anything, such as:
export default 1 + 2; 
export default function functionName() {};
export default class ClassName {};
export default function* generatorFunctionName() {};
// default exports don't have to be named
export default function () {};
export default class {};
export default function* () {};


// aggregating modules
// relaying for barrel modules 

export * from "module-name.js"; // export all 
export * as allInclusive from "module-name.js";
export { name1, name2 } from "module-name.js";
export { import1 as name1, import2 as name2 } from "module-name";
export { default, } from "module-name.js";
export { default as name1 } from "module-name.js";


// Note that functions are exported as function declarations, not expressions