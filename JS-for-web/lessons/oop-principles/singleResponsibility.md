## Single Responsibility Principle

This is one of the most important principle to remember!
It is the first of the S.O.L.I.D principles.

**Single Responsibility Principle** states that a class, module, or
object, etc. should only have ONE responsibility. This doesn't mean that
it should only do one thing, but that these things should only relate to
or be part of only ONE RESPONSIBILITY.

For example (and a very common one), responsibilities include DOM 
manipulation and application logic; each is a separate responsibility.

```js
// This is not how we want to delegate responsibility
function isGameOver() {

    // game over logic here
    
    // but the DOM manipulation also goes in here 
    if (gameOver) {
        const gameOverDiv = document.querySelector('section.game-over');
        gameOverDiv.classList.remove('hidden');
    }
}
```

Observing the SRP would extract all the DOM manipulation into its own
module and use it like so:

```js
import DOMStuff from "./DOMResponsibility.js";

function isGameOver() {

  // game over logic goes here!

  if (gameOver){
    DOMStuff.gameOver(this.winner);
  }
}
```

### Loosely coupled objects

Not part of SOLID, but important for OOP.
Obviously, at the end all objects need to work together to form the 
final app. It's important that while being able to work with each other,
each individual object can stand alone as much as possible (without
losing SRP). 

Tightly coupled objects are objects that rely so heavily on each other
that removing or changing one will mean that you have to completely
change the other one. For example, DOM manipulation could be so entwined
with the game logic code that updating one would impact the other 
heavily. 

This is highly related to SRP, with a slightly different angle. 

> Ensuring responsibilities don't get too tightly coupled or entwined 
> by ensuring singular and loosely coupled responsbility delegation. 

