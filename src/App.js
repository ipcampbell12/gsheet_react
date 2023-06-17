import { Fragment, useState } from "react";
import Title from './components/Title'
import Form from './components/Form'
import BookLog from "./components/BookLog";


function App() {

  const [books, setBooks] = useState([])

  const addBook = (book) => {
    const id = books.length + 1
    const newBook = { id, ...book }
    console.log("New book: ", newBook)
    setBooks([...books, newBook])
  }

  return (
    <Fragment>
      <Title />
      <Form addBook={addBook} />
      <BookLog books={books} />
    </Fragment>
  );
}

export default App;
