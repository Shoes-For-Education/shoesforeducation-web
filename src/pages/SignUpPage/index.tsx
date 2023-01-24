import React, { useCallback } from 'react';
import Books from "../../assets/books.jpg";
import Navbar from '../../components/Navbar';
import { useStyles } from './styles';
import SignUpPageContent from "./SignUpPage";
import { useDispatch } from 'react-redux';
import { setCreateClient } from '../../store/actions/auth.actions';

const SignUpPage = () => {
    const { classes } = useStyles();
    const dispatch = useDispatch();

    const signUp = ({ password:pass, email }:any) => {
        dispatch(setCreateClient({ pass, email }));
    };

    return (
        <Navbar>
            <div 
                style={{ minHeight: window.innerHeight }}>
                <SignUpPageContent signUp={signUp}/>
            </div>
        </Navbar>
    )
}

export default SignUpPage; 