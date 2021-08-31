// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
};

//UI class
class UI {
    static displayBooks() {
        const books = Storage.getBooks();

        books.forEach((book) => { UI.addBookToList(book) });
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const bForm = document.getElementById('book-form');
        bForm.insertBefore(div, bForm.firstChild);
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
}

// store class
class Storage {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Storage.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Storage.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // prevent actual submit
    e.preventDefault()
    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // validate
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please, fill in all fields', 'danger')
    } else {
        // instantiate book
        const book = new Book(title, author, isbn);

        // add the book to UI
        UI.addBookToList(book);

        // add book to local storage
        Storage.addBook(book);

        // clear fields
        UI.clearFields();
        // show success message
        UI.showAlert('Book is successfully created', 'success');
    };

});

//event: remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // remove book from UI
    UI.deleteBook(e.target);

    // delete book from storage
    Storage.removeBook(e.target.parentElement.previousElementSibling.textContent)

    // show success message
    UI.showAlert('Book is successfully created', 'success');
});
