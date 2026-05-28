const myLibrary = [];

function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = isRead ? "read" : "not read yet";
    this.id = crypto.randomUUID();
}

function addBookToLibrary (title, author, pages, isRead) {
    let bookName = title.toLocaleLowerCase().split(' ').slice(0, 2).join('_');
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
}


addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(myLibrary);
