
import BookEntry from './BookEntry';

function BookLog(props) {

    //console.log('Books in booklog: ', props.books)

    return (
        <div>
            <h3>Book Log</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pages</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.books.map((book) => (
                            <BookEntry book={book} />
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}

export default BookLog;