import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import LoginPageContent from "./LoginPage";

const LoginPage = () => {
    return (
        <Navbar>
            <>
            <div>
                <LoginPageContent />
            </div>
            <Footer />
            </>
        </Navbar>
    )
}

export default LoginPage; 