import React from 'react';

function BookEntry(props) {
    //console.log('Book is: ', book)

    return (
        <tr key={props.book.id}>
            <td>{props.book.id}</td>
            <td>{props.book.title}</td>
            <td>{props.book.author}</td>
            <td>{props.book.pages}</td>
            <td>{props.book.summary}</td>
        </tr>
    );
}

export default BookEntry;