import React from 'react';
import Book from '../Book/Book';
import './Books.css'

const Books = (props) => {
    const { books } = props;
    return (
        <div>
            <h2 className="h2">Books Collection</h2>
            <div className="local-stage grid">
                {
                    books.map(book => <Book book={book} key={book.name} />)
                }
            </div>
        </div>
    );
};

export default Books;