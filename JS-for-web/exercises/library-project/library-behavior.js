const myLibrary = [];

function Book (title, author, pages, isRead) {
    this.title = title;
    this.fileName = title.toLocaleLowerCase().split(' ').slice(0, 2).join('_');
    this.author = author;
    this.pages = pages;
    this.read = isRead ? "read" : "not read yet";
    this.id = crypto.randomUUID();
}

function addBookToLibrary (title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
}


addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary("Harry Potter & the Philosopher's Stone", 'J.K. Rowling', 347, true);
addBookToLibrary('Principles: Life & Work', 'Ray Dalio', 566, false);

console.log(myLibrary);


function displayBook () {
    const libraryGrid = document.querySelector('div.library-grid');
    for (let book of myLibrary) {
        const card = document.createElement('div.card');
        libraryGrid.appendChild(card);

        const cardTitle = document.createElement("h3");
        cardTitle.textContent = book.title;

        const cardAuthor = document.createElement('p');
        cardAuthor.textContent = book.author;

        const cardPages = document.createElement('p');
        cardPages.textContent = book.pages;

        const cardIsRead = document.createElement('p');
        cardIsRead.textContent = book.isRead;

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardIsRead);
        // console.log(card);
    }
}

displayBook();
