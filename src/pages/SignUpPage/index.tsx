import { Paper } from '@material-ui/core';
import React from 'react';
import Books from "../../assets/books.jpg";
import Navbar from '../../components/Navbar';
import { useStyles } from './styles';
import SignUpPageContent from "./SignUpPage";

const SignUpPage = () => {
    const classes = useStyles();

    return (
        <Navbar>
            <div 
                style={{ minHeight: window.innerHeight }}>
                <SignUpPageContent />
            </div>
        </Navbar>
    )
}

export default SignUpPage; 