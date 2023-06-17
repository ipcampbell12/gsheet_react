import { Fragment } from 'react';
import classes from './Title.module.css'

function Title(props) {
    return (
        <Fragment>
            <h1 className={classes.title}>Reading Log</h1>
            <h3 className={classes.title}>How much have you read this week?</h3>
        </Fragment>
    );
}

export default Title;