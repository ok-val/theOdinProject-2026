// index.js

/**
 * index.js (entry point) <---- greeting.js
 */

import { greeting } from "./greeting.js";

// Now we also need the css to imported in here as well.
import "./styles.css";

console.log(greeting);
