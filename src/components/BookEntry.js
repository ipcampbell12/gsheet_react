import React from 'react';

function BookEntry(props) {
    return (
        <tr>
            <td>{props.book.id}</td>
            <td>{props.book.title}</td>
            <td>{props.book.author}</td>
            <td>{props.book.pages}</td>
            <td>{props.book.summary}</td>
        </tr>
    );
}

export default BookEntry;