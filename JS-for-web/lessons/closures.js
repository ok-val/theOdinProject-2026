// Closure

// The idea is having a passed-in input or parameter be locked in 
// by passing it inside a nested function and returning that function.
// So that when the function is created and returned, 
// that initial input is part of its defintion.

function makeAddingFunction(firstNumber) {
    // any variables declared here will also be accessible within returnedFunction
    return function returnedFunction(secondNumber) {
        return firstNumber + secondNumber;
    }
}


const add5fn = makeAddingFunction(5); // add5fn is now a function
// (*) add5fn now looks like this:
// const add5fn = function returnedFunction(secondNumber) {
//     return 5 + secondNumber; // see that passed-in arg is now part of the returned function itself
// }

const res = add5fn(3);
console.log(res); // 8 

console.log(add5fn(5)); // 10

// (*) See that returnedFunction forms a closure around the firstNumber parameter.
// A closure is created when we combine function declaration and the surrounding conditions
// for that declaration.

// This is a crucial behavior of functions. Particularly useful for an idea called factory functions.


// Second example: 
function createListWithSameFirstElem(firstElem) {
    return function returnListWithSameFirstElem(...restElems) {
        let list = [firstElem];
        for (let elem of restElems) {
            list.push(elem);
        }
        return list;
    }
}

let initializeList = createListWithSameFirstElem(2);

let finalList1 = initializeList(3, 5, 7, 11);
let finalList2 = initializeList(53, 59, 67, 71);

console.log(finalList1); // [2, 3, 5, 7, 11]
console.log(finalList2); // [2, 53, 59, 67, 71]

// See that in the pattern above, here's the computed function declaration of returnListWithSameFirstElem
// const returnListWithSameFirstElem = function(...restElems) {
//     let list = [2];
//     // rest of code...;
// }
// firstElem's value is not accessible whenever without having to create a globally scoped var!

console.log(finalList1.at(0)); // 2
console.log(finalList2.at(0)); // 2

// READ MORE: https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern