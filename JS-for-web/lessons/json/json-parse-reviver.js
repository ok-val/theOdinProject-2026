// Run Quokka to see live results

/**
 * ## Reviver is the optional second positional arg of the parse()
 * method of the JSON object type.
 * */ 

let text = '{"name":"John","age":"30"}';

const person = JSON.parse(text, function (key, value) {
    // Convert the age to a number
    if (key == "age") {
        return Number(value);
    }
    // Return other keys/values unchanged
    return value;
});

console.log(person.age);
console.log(typeof person.age);


/** 
 * Since JSON doesn't support any other non-primitives than object
 * literals and arrays, Reviver can be used to convert Dates objects 
 * as strings back to Date objects.
*/

text = '{"event": "Conference", "date": "2026-07-22T11:28:00.000Z"}';

const myObject = JSON.parse(text, (key, value) => {
// Convert date string to a Date object
  if (key === "date") {
    return new Date(value); // Converts the string back to a Date object
  }
// Return other keys/values unchanged
  return value;
});

console.log(typeof myObject.date);


// To review, I must use double-quote for JSON key-value pairs
const invalidJSONText = "{name:'John'}";

JSON.parse(invalidJSONText); 
