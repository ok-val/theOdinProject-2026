const myLibrary = [];

// Book function constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.fileName = title.toLowerCase().split(' ').slice(0, 2).join('_');
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.read = this.isRead ? "read" : "not read yet";
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

Book.prototype.info = function () {
    let isReadLiteral = this.isRead ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${isReadLiteral}.`
}

Book.prototype.toggleRead = function () {
    switch (this.isRead) {
        case true:
            this.isRead = false;
            break;
        case false:
            this.isRead = true;
            break;
    }
}


function displayBook() {
    const libraryGrid = document.querySelector('div.library-grid');
    // [node].replaceChildren() is the API for clearing children nodes inside a parent [node].
    libraryGrid.replaceChildren();

    // for..of loop to display books
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
        let isReadLiteral = book.isRead ? 'read' : 'not read yet'
        cardIsRead.textContent = isReadLiteral.charAt(0).toUpperCase() + isReadLiteral.slice(1);

        const cardId = document.createElement('p');
        cardId.setAttribute('id', 'bookId');
        cardId.textContent = book.id;

        const toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = book.isRead ? '☑' : '☐';
        // bind the callback with the book object so that it can use book as `this` context
        toggleReadButton.addEventListener('click', toggleReadIconSwitch.bind(book));

        const cardRemoveBtn = document.createElement('button');
        cardRemoveBtn.textContent = 'Remove';

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardIsRead);
        card.appendChild(cardId);
        card.appendChild(toggleReadButton);
        card.appendChild(cardRemoveBtn);

        // Remove button function
        cardRemoveBtn.addEventListener('click', removeButtonClick);
    }
}


// Toggle read icon function
function toggleReadIconSwitch(event) {
    this.toggleRead();

    switch (this.isRead) {
        case true:
            event.target.innerText = '☑';
            break;
        case false:
            event.target.innerText = '☐';
            break;
    }
    
    refreshButton.click();
}


// Remove button function
function removeButtonClick(event) {
    event.preventDefault();
    const parentElement = this.parentElement;
    const id = parentElement.children.bookId.innerText;
    let searchRes = myLibrary.find((Book) => Book.id === id);
    myLibrary.splice(myLibrary.indexOf(searchRes), 1);
    displayBook();
}


// Refresh button function 
const refreshButton = document.querySelector('button#refresh');
refreshButton.addEventListener('click', displayBook);


// Add button function
const addButton = document.querySelector('button#add');
addButton.addEventListener('click', addButtonClick);

function addButtonClick(event) {
    const cancelButton = document.querySelector('button#cancelAdd');
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
    displayBook();
    cancelButton.click();
}


addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary("Harry Potter & the Philosopher's Stone", 'J.K. Rowling', 347, true);
addBookToLibrary('Principles: Life & Work', 'Ray Dalio', 566, false);
refreshButton.click();
