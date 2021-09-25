import React from 'react';
import Navbar from '../../components/Navbar';
import Page from '../../components/Page';
import BookPageContent from './BookPage';

const BookPage = () => {
    return (
        <Navbar>
            <Page>
                <BookPageContent />
            </Page>
        </Navbar>
    )
}

export default BookPage; 