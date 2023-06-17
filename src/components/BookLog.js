import { useState } from 'react';
import BookEntry from './BookEntry';

function BookLog(props) {

    const [books, setBooks] = useState([])

    const addBook = (book) => {
        const id = books.length + 1
        const newBook = { ...id, book }
        setBooks([...books, newBook])
    }

    return (
        <div>
            <h3>Book Log</h3>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th>Summary</th>
                </thead>
                <tbody>
                    {
                        books.map((book) => (
                            <BookEntry book={book} addBook={addBook} />
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}

export default BookLog;