// Toggle Quokka.js 

const person = {name: "John"};
console.log(typeof person);

// JSON.stringify: Priming for parse() by turning object into strings
const JSONperson = JSON.stringify(person);
console.log(typeof JSONperson);
console.log(JSONperson);

const result = JSON.parse(JSONperson);
console.log(typeof result);


// Here are some basic stringify conversions
console.log(JSON.stringify("ChimmiChoo"));
console.log(JSON.stringify(42));
console.log(JSON.stringify(["Ford","Volvo","BMW"]));
console.log(JSON.stringify({"name":"John","age":30,"city":"New York"}));
console.log(JSON.stringify(false));
console.log(JSON.stringify(true));
console.log(JSON.stringify(Boolean(0)));
console.log(JSON.stringify(Boolean(1)));
console.log(JSON.stringify(undefined));

// Everything turns into strings