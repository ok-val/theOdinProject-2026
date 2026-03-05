function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);



// // Here's how to declare variables 

// let VarA = "Pomello";
// let VarB = "Orange";

// // Note that reassigment does not need to use `let`
// VarA = "Pine"

// console.log(VarA, VarB)

// // This creates a sort of immutable which cannot be assigned
// const pi = 3.14;

// // Doing this results in an error at line 16
// // pi = 10;

// console.log(pi)



