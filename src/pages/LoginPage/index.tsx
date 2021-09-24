import React from 'react';
import Navbar from '../../components/Navbar';
import LoginPageContent from "./LoginPage";

const LoginPage = () => {
    return (
        <Navbar>
            <div>
                <LoginPageContent />
            </div>
        </Navbar>
    )
}

export default LoginPage; 