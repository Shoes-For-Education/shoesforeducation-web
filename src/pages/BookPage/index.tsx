import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Page from '../../components/Page';
import BookPageContent from './BookPage';

const BookPage = () => {
    return (
        <Navbar>
            <>
                <Page>
                    <BookPageContent />
                </Page>
                <Footer />
            </>
        </Navbar>
    )
}

export default BookPage; 