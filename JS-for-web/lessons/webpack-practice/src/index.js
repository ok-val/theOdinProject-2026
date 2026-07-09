// index.js

/**
 * index.js (entry point) <---- greeting.js
 */

import { greeting } from "./greeting.js";

// Now we also need the css to imported in here as well.
import "./styles.css";

// This image will be handled by Webpack using the `asset/resource` rule
// Make sure it is default imported
import catImage from "C:/Users/Aorus/Pictures/Saved Pictures/cat-pfp-1.jpg";

const newImage = document.createElement('img');
newImage.src = catImage;

document.body.appendChild(newImage);

console.log(greeting);
