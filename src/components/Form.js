import { useState } from 'react';
import classes from './Form.module.css'

function Form(props) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [startPage, setStartPage] = useState('');
    const [endPage, setEndPage] = useState('');
    const [summary, setSummary] = useState('')
    // const [finished, setFinished] = useState(false)


    const submitEntry = (e) => {
        e.preventDefault();

        const pages = parseInt(endPage) - parseInt(startPage)
        //console.log('Pages: ', pages)
        props.addBook({ title, author, pages, summary })

        setTitle('')
        setAuthor('')
        setStartPage('')
        setEndPage('')
        setSummary('')
        // setFinished(false)
    }

    return (
        <form className={classes.form} onSubmit={submitEntry}>
            <div id='title'>
                <label>Title</label>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div id='author'>
                <label>Author</label>
                <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div id='startPage'>
                <label>Start Page</label>
                <input type="number" value={startPage} onChange={(e) => setStartPage(e.target.value)} />
            </div>
            <div id='endPage'>
                <label>End Page</label>
                <input type="number" value={endPage} onChange={(e) => setEndPage(e.target.value)} />
            </div>
            <div id='summary'>
                <label>Summary</label>
                <textarea name="Summary" rows="5" value={summary} onChange={(e) => setSummary(e.target.value)}></textarea>
            </div>
            <button>Add Book</button>

        </form>
    );
}

export default Form;