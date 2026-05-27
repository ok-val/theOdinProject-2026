const myLibrary = [];

function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = isRead ? "read" : "not read yet";
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
}

let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(book1.info());
