## More on Single Responsibility principle
https://duncan-mcardle.medium.com/solid-principle-1-single-responsibility-javascript-5d9ce2c6f4a5

The single responsibility principle says that a class or module should 
have only single purpose. It addresses only one scope of functionality
while being able to call on other functionalities, but which shouldn't 
be written there.

Consider the following example:
```js
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        if (...) { // Logic to determine whether or not the car should start
            this.errorLog(`The car ${this.make} ${this.model} started.`);
            return true;
        }
        this.errorLog(`The car ${this.make} ${this.model} failed to start.`);
        return false;
    }

    // Functionality (1) in question *
    errorLog(message) {
        console.log(message);
    }
}
```

The functionality (1) violates the single responsibility principle:
Logging error shouldn't be a responbility of the Car class.

I could easily refactor this by assigning the ErrorLog a new class:

```js
class ErrorLog {
    static log(make, model) {
        console.log(`The car ${make} ${model} failed to start.`);
    }
}

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        if (...) { // Logic to determine whether or not the car should start
            ErrorLog.log(`The car ${this.make} ${this.model} started.`);
            return true;
        }
        ErrorLog.log(this.make, this.model);
        return false;
    }
}
```

