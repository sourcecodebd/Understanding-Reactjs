import React from 'react';
import './Book.css'

const Book = (props) => {
    const { name, author } = props.book;
    return (
        <div title={name} className="book">
            <p><b>Book:</b> {name}</p>
            <p><b>Author:</b> {author}</p>
        </div>
    );
};

export default Book;