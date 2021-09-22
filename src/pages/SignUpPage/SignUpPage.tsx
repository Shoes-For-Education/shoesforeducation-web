import { Paper } from '@material-ui/core';
import React from 'react';
import Books from "../../assets/books.jpg";
import { useStyles } from './styles';

const SignUpPage = () => {
    const classes = useStyles();

    return (
        <div 
            className={classes.container}>
            <img className={classes.books} src={Books} alt="books" />
            <Paper>
                <form></form>
            </Paper>
        </div>
    )
}

export default SignUpPage; 