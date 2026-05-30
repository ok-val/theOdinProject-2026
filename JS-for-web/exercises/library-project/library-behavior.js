const myLibrary = [];

function Book (title, author, pages, isRead) {
    this.title = title;
    this.fileName = title.toLowerCase().split(' ').slice(0, 2).join('_');
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


function displayBook () {
    const libraryGrid = document.querySelector('div.library-grid');
    for (let book of myLibrary) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
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

// Add button function

const addButton = document.querySelector('button#add');
addButton.addEventListener('click', addButtonClick);

function addButtonClick (event) {
    event.preventDefault();
    const title = document.getElementById('add-title');
    const author = document.getElementById('add-author');
    const pages = document.getElementById('add-pages');
    const readStatus = document.getElementById('add-readStatus');
    let isRead = readStatus.value;

    switch (isRead) {
        case "on":
            isRead = true;
            break;
        case "off":
            isRead = false;
            break;
    }
    addBookToLibrary(title.value, author.value, pages.value, isRead);
    // console.log(myLibrary.at(-1));
}


displayBook();

