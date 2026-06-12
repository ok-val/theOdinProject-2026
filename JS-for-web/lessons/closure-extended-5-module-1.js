// to be used for closure-extended-5.js

import { x } from "./closure-extended-5-module.js";

export const getX = () => x;

// Imported bindings are READ-ONLY, even though x is declared with let.
// Only the module that owns the binding can mutate x freely. Can't do it here.
// The importer cannot reassign a binding it doesn't own.
// So the code below will throw an error.

// export const incrementX = () => {
//     x++;
// };