/**
 * Liskov Substitution (or Substitutability)
 * is another OOP principle stating that, in a program,
 * if D is a subtype of A, 
 * OBJECTS OF TYPE A may be replaced with OBJECTS OF TYPE D.
 * 
 * For example, if I have a class Animal and subclass of Animal of Dog,
 * wherever Animal is used can be replaced with Dog without any problem.
 * 
 */

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get width() {
        return this._width;
    }

    set width(newWidth) {
        this._width = newWidth;
    }

    get height() {
        return this._height;
    }

    set height(newHeight) {
        this._height = newHeight;
    }

    // setWidth(width) {
    //     this.width = width;
    // }

    // setHeight(height) {
    //     this.height = height;
    // }

    area() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    set width(newWidth) {
        this._width = newWidth;
        this._height = newWidth;
    }

    set height(newHeight) {
        this._height = newHeight;
        this._width = newHeight;
    }
}

// These program follows the Liskov substitution principle

const square1 = new Square(2, 2);
console.log(square1.area());

// const square1 = new Square(2, 2);
// console.log(square1.area());

function increaseRectWidth(rect) {
    rect.width = 3;
}

increaseRectWidth(square1);
console.log(square1.area());
console.log(square1.width);
console.log(square1.height);

