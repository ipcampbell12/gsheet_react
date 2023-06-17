import { useState } from 'react';
import classes from './Form.module.css'

function Form(props) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [startPage, setStartPage] = useState('');
    const [endPage, setEndPage] = useState('');
    const [summary, setSummary] = useState('')
    const [finished, setFinished] = useState(false)


    const submitEntry = (e) => {
        e.preventDefault();

        props.onAdd({ title, author, startPage, endPage, summary, finished })

        setTitle('')
        setAuthor('')
        setStartPage('')
        setEndPage('')
        setSummary('')
        setFinished(false)
    }

    return (
        <form className={classes.form} onSumbit={submitEntry}>
            <div id='title'>
                <labe>Title</labe>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div id='author'>
                <labe>Author</labe>
                <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div id='startPage'>
                <labe>Start Page</labe>
                <input type="number" value={startPage} onChange={(e) => setStartPage(e.target.value)} />
            </div>
            <div id='endPage'>
                <labe>End Page</labe>
                <input type="number" value={endPage} onChange={(e) => setEndPage(e.target.value)} />
            </div>
            <div id='summary'>
                <labe>Summary</labe>
                <input type="textarea" placeholder="Title" value={summary} onChange={(e) => setSummary(e.target.value)} />
            </div>
            <div id='Finished'>
                <labe>Finished</labe>
                <input type="checkbox" placeholder="Title" value={finished} onChange={(e) => setFinished(e.target.value)} />
            </div>
        </form>
    );
}

export default Form;